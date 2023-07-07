import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card.jsx';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleCategori } from '../api';
import { Preloader } from '../components/Preloader';
// import { OneCategori } from '../components/OneCategori';

function SingleCategori() {
    const [data, setData] = useState([]);
    const [datarr, setdDatarr] = useState(() => {
        const saved = localStorage.getItem('liked');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    const { name } = useParams();
    const { goBack } = useHistory();
    console.log(name)
    
    function AddLocalSt(props) {
        setdDatarr((prev) => [...prev, { el: props }]);
    }

    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(datarr));
    }, [datarr]);

    useEffect(() => {
        getSingleCategori(name).then((data) => {
            setData(data);
        });
    }, [name]);
    // console.log(data)
    
    return (
        <div className="asdasdadadas">
        <button className='btn' onClick={goBack}>Back</button>
            {!data.length ? <Preloader /> 
                : data.map((item, index) => (
                    <Card key={index} {...item} AddLocalSt={AddLocalSt} />
                    ))}
        </div>
    );


}
export { SingleCategori };

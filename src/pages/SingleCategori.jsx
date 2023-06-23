import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleCategori } from '../api';
import { Preloader } from '../components/Preloader';
import { OneCategori } from '../components/OneCategori';
function SingleCategori() {
    const [data, setData] = useState([]);
    const { name } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getSingleCategori(name).then((data) => {
            setData(data);
        });
    }, [name]);
    return (
        <>
            <button className='btn' onClick={goBack}>
                Back
            </button>
            {!data.length ? <Preloader /> : <OneCategori data={data} />}
        </>
    );

    // function generExaple(example) {
    //     return example.split('\r').map((el, ind) => (
    //         <p key={ind}>
    //             {ind + 1}
    //             {').'} {el}
    //         </p>
    //     ));
    // }
}
export { SingleCategori };

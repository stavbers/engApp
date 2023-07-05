import React, {useState, useEffect} from 'react'
import {LikedCard} from '../components/LikedCard'
import { useHistory } from 'react-router-dom';
import { Preloader } from '../components/Preloader';


function Liked() {
  const { goBack } = useHistory();
  const [items, setItems] = useState([]);
  const [stor, setStor] = useState(false);

  useEffect(() => {
    const el = JSON.parse(localStorage.getItem('liked'));
    if (el) {
        setItems(el);
    }
}, []);

useEffect(() => {
    if(stor){
        localStorage.removeItem("liked");
        goBack()
    }

}, [stor])

return (
    <>
    <div className="wrp" style={{display: "flex", justifyContent: "space-between"}}>
    <button className='btn' onClick={goBack}>Back</button>
    <button className='btn' onClick={()=> {setStor(prev => !prev)}}>Clear Storage</button>
    </div>


        {!items.length ? <Preloader /> 
            : items.map((item, index) => (
                <LikedCard key={index} {...item} />
                ))}
    </>
);
}
export { Liked };

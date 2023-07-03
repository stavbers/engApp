import React, {useState, useEffect} from 'react'
import {LikedCard} from '../components/LikedCard'
import { useHistory } from 'react-router-dom';
import { Preloader } from '../components/Preloader';


function Liked() {
  const { goBack } = useHistory();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const el = JSON.parse(localStorage.getItem('liked'));
    if (el) {
        setItems(el);
        setLoading(false);
    }
}, []);

return (
    <>
    <button className='btn' onClick={goBack}>Back</button>
        {!items.length ? <Preloader /> 
            : items.map((item, index) => (
                <LikedCard key={index} {...item} />
                ))}
    </>
);
}
export { Liked };

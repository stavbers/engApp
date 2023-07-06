import React, { useRef } from 'react';
import Accord from './Accord';

function Card(props) {
    const { id, word, translate, exempleEn, exempleRu, AddLocalSt } = props;
    const btn = useRef();

    function generExaple(example) {
        return example.split('\r').map((el, ind) => (
            <p key={ind}>
                {ind + 1}
                {').'} {el}
            </p>
        ));
    }
    return (
        <div id={id} className='simple-card'>
            <span className='simple-card__numb'>{id}).</span>
            <div className='simple-card__name'>{word.toUpperCase()}</div>
            <div className='simple-card__transl'>{translate}</div>
            <button
                className='simple-card__btn'
                onClick={() => {
                    AddLocalSt(props);
                    btn.current.classList.add('hide')
                }}
                ref={btn}
            >
                like
            </button>
            <Accord
                generExaple={generExaple}
                exempleEn={exempleEn}
                exempleRu={exempleRu}
            />
        </div>
    );
}
export { Card };

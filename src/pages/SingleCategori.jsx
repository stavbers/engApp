import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleCategori } from '../api';
import { Preloader } from '../components/Preloader';
function SingleCategori() {
    const { name } = useParams();
    console.log(name);
    return <h3>{name}</h3>;

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

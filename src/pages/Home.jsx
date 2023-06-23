import React, { useEffect, useState } from 'react';
import { CategoriList } from '../components/CategoriList';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
function Home() {
    const [categori, setCategori] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategori(data);
            setLoading(false);
        });
    }, []);
    return (
        <main className='container'>
            {loading ? <Preloader /> : <CategoriList categori={categori} />}
        </main>
    );
}

export { Home };

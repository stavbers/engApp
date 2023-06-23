import React, { useEffect, useState } from 'react';
import { CategoriList } from '../components/CategoriList';
import { Preloader } from '../components/Preloader';
function Home() {
    const [categori, setCategori] = useState([]);
    const [oneCategori, setoneCategori] = useState([]);
    const [loading, setLoading] = useState(true);

    function getCategori(id, name) {
        console.log(id, name)
        fetch('http://apien.stavbers.site/api')
            .then((resp) => resp.json())
            .then((data) => {
                setoneCategori(data);
            });
    }
    useEffect(() => {
        fetch('http://apien.stavbers.site/api/categori')
            .then((resp) => resp.json())
            .then((data) => {
                setCategori(data);
                setLoading(false);
            });
    }, []);
    return (
        <main className='container'>
            {loading ? (
                <Preloader />
            ) : (
                <CategoriList
                    categori={categori}
                    oneCategori={oneCategori}
                    getCategori={getCategori}
                />
            )}
        </main>
    );
}

export { Home };

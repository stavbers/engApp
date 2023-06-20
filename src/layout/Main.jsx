import React, { useEffect, useState } from 'react';
import { CategoriList } from '../components/CategoriList';
import { Preloader } from '../components/Preloader';
function Main() {
    const [categori, setCategori] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://apien.stavbers.site/api')
            .then((resp) => resp.json())
            .then((data) => {
                setCategori(data);
                setLoading(false);
            });
    }, []);
    return (
        <main>
            {loading ? <Preloader /> : <CategoriList categori={categori} />}
        </main>
    );
}

export { Main };

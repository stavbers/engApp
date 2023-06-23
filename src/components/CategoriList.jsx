import { Categori } from './Categori';

function CategoriList(props) {
    const { categori = [] } = props;

    return (
        <div className='categoriList'>
            {categori.length ? (
                categori.map((cat) => <Categori key={cat.id} {...cat} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
export { CategoriList };

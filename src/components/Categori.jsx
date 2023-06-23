import { Link } from 'react-router-dom';
import '../Categori.css';
function Categori(props) {
    const { id, name, img, bgColor } = props;

    return (
        <div
            className='card'
            id={id}
            style={{ background: bgColor, cursor: 'pointer' }}
        >
            <Link to={`/categori/${name}`} className='card-action'>
                <div className='card-content'>
                    <img className='card-img' src={img} alt='name' />
                    <span className='card-name'>{name}</span>
                </div>
            </Link>
        </div>
    );
}

export { Categori };

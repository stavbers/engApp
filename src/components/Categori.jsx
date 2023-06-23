import '../Categori.css';
function Categori(props) {
    const { id, name, img, bgColor, getCategori } = props;

    return (
        <div
            className='card'
            id={id}
            style={{ background: bgColor, cursor: 'pointer' }}
            onClick={() => {
                getCategori(id, name);
            }}
        >
            <div className='card-content'>
                <img className='card-img' src={img} alt='name' />
                <span className='card-name'>{name}</span>
            </div>
        </div>
    );
}

export { Categori };

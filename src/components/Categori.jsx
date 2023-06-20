function Categori(props) {
    const { id, word, translate, exempleEn, exempleRu } = props;
 
    

    return (
        <div id={id} className='row'>
            <div className='col'>
                <div className='card'>
                    <div className='card-image'></div>
                    <div className='card-content'>
                        <p>{word}</p>
                        <p style={{ color: 'red', fontSize: '22px' }}>
                            {translate}
                        </p>
                        {exempleEn.split('\r').map((el, ind) => (
                            <p key={ind}>
                            {ind + 1}{').'} {el}</p>
                        ))}
                        {exempleRu.split('\r').map((el, ind) => (
                          <p key={ind}>
                            {ind + 1}{').'} {el}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Categori };

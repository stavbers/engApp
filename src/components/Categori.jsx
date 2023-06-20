import '../Categori.css'
function Categori(props) {
    const {id, name, img, bgColor} = props
    console.log(props)
    
    // const { id, word, translate, exempleEn, exempleRu } = props;

    // function generExaple(example) {
    //     return example.split('\r').map((el, ind) => (
    //         <p key={ind}>
    //             {ind + 1}
    //             {').'} {el}
    //         </p>
    //     ));
    // }

    return (
                <div className='card' id={id} style={{background: bgColor}}>
                    <div className='card-content'>
                      <img className="card-img" src={img} alt="name" />
                      <span className="card-name" >{name}</span>
                        {/* {generExaple(exempleEn)}
                        {generExaple(exempleRu)} */}
                    </div>
                </div>

    );
}

export { Categori };

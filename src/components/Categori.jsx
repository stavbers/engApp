function Categori(props) {
  const {id, word, translate, exempleEn, exempleRu} = props
  // console.log(id, word, translate, exempleEn, exempleRu)
  console.log(props)
  
  return   (
    <div id={id} className="row">
      <div className="col">
        <div className="card">
          <div className="card-image">
          </div>
          <div className="card-content">
            <p>{word}</p>
            <p style={{color: 'red', fontSize: '22px'}}>{translate}</p>
            <p>{exempleEn}</p>
            <p>{exempleRu}</p>
          </div>
        </div>
      </div>
    </div>
    
  
    )
}

export {Categori}
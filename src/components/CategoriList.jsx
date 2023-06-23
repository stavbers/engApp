import {Categori} from './Categori'

function CategoriList(props) {
  const {categori = [], oneCategori, getCategori} = props

  return <div className="categoriList">
    {categori.length ? categori.map(cat => (
       <Categori key={cat.id} {...cat} oneCategori={oneCategori} getCategori={getCategori} />
      )) : <h4>Nothing found</h4>
      }
  </div>

}
export {CategoriList}
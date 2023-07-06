import Accord from './Accord'

import '../Heart.css'
function Card(props) {
const {id, word, translate, exempleEn, exempleRu, AddLocalSt} = props


function generExaple(example) {
  return example.split('\r').map((el, ind) => (
      <p key={ind}>
          {ind + 1}
          {').'} {el}
      </p>
  ));
}
return (
  <div id={id} className="simple-card">
    <span className="simple-card__numb">{id}).</span>
    <div className="simple-card__name">{word.toUpperCase()}</div>
    <div className="simple-card__transl">{translate}</div>
    <button className="simple-card__btn" onClick={()=> {AddLocalSt(props)}}>like</button>
    <Accord generExaple={generExaple} exempleEn={exempleEn} exempleRu={exempleRu}/>
  </div>
)


}
export {Card}
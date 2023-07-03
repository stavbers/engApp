import Accord from './Accord'
function LikedCard(props) {
const {id, word, translate, exempleEn, exempleRu} = props
console.log(props)

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
    <Accord generExaple={generExaple} exempleEn={exempleEn} exempleRu={exempleRu}/>
  </div>
)


}
export {LikedCard}
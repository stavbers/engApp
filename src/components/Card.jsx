import Accord from './Accord'
function Card(props) {
const {id, word, translate, exempleEn, exempleRu} = props
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
    <div className="simple-card__name">{word.toUpperCase()}</div>
    <div className="simple-card__transl">{translate}</div>
    <div className="simple-card__exemple">{generExaple(exempleEn)}</div>
    <div className="simple-card__exemple simple-card__exemple_ru">{generExaple(exempleRu)}</div>
    <Accord />
  </div>
)


}
export {Card}
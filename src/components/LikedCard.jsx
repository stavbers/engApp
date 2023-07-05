import Accord from './Accord'
function LikedCard(props) {
const {id, word, translate, exempleEn, exempleRu} = props.el


return (
  <div id={id} className="simple-card">
    <span className="simple-card__numb">{id}).</span>
    <div className="simple-card__name">{word}</div>
    <div className="simple-card__transl">{translate}</div>
  </div>
)


}
export {LikedCard}
function Card(props) {
const {id, word, translate, exempleEn, exempleRu} = props
  
return <h1 id={id}>{word}</h1>




    // function generExaple(example) {
    //     return example.split('\r').map((el, ind) => (
    //         <p key={ind}>
    //             {ind + 1}
    //             {').'} {el}
    //         </p>
    //     ));
    // }
}
export {Card}
import { Card } from '../components/Card';
function OneCategori(props) {
    // console.log(props);
    const elem = props.data;
    console.log(elem)
    
    return (
        <>
            {elem.map((item, index) => (
                <Card key={index} {...item} AddLocalSt={props.AddLocalSt} />
            ))}
        </>
    );
}

export { OneCategori };

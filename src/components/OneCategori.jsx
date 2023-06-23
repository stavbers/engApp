import { Card } from '../components/Card';
function OneCategori(props) {
    const elem = props.data;
    return (
        <div>
            {elem.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );

}

export { OneCategori };

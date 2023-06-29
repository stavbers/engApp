import { Link } from 'react-router-dom';

function NotFound() {
    return (
        
            <div className='notFound'>
                <div className='notFound-wrp'>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <Link to={'/'}> Go Home Page</Link>
                </div>
            </div>
        
    );
}
export { NotFound };

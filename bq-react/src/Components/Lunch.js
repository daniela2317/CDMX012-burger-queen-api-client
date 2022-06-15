import '../Stylesheets/Menus.css';
import { getProducts } from './APICalls';
import { useState, useEffect} from 'react';

const Lunch = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <>
        <button>Almuerzo</button>
            <div className='menu'>
                {products.map((product) => (
                    <div className="product-menu" key={product.id}>
                        <img alt='food' src={product.image} />
                        <p>{product.name} ${product.price}</p>
                    </div>
                    ))}
            </div>
        </>
    )
}



export default Lunch; 
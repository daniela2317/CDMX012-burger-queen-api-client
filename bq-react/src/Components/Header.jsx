import fastFood from './Images/fast-food.png';
import '../Stylesheets/Header.css';

const Header = () => {
    return (
        <div>
        <img src={fastFood} alt='hamburger' className='hamburger'/>
        <header> Burger Queen 
        </header>
        </div>
    )
}

export default Header;
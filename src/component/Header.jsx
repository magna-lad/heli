import './Header.css';
import logo from '../assets/logo.png';
import fire from '../assets/fire.png'
function Header() {
    const PurchaseClick = () => {
        window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
      };
    
  return (
    
    <div className='header'>

        <div className="logo-purchase">
            <img src={logo}/>
            <button className='purchase' onClick={PurchaseClick}>  Purchase Now </button>
        </div>

    </div>
    
  );
}

export default Header;

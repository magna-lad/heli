import './StickyBar.css';
import fire from '../assets/envato-logo.svg'
export default function Stickybar() {
  const PurchaseClick = () => {
    window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
  };

  return (
    
    <div>
        <div className='stickylabel'>

            <button className='sticky-logo' onClick={PurchaseClick}>
              <img className='sticky-image' src= {fire} />
            </button>


            <button className='buy-now' onClick={PurchaseClick}>Buy now</button>
        </div>
    </div>
    
  );
}



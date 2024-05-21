import './Browser.css'
import browsers from '../assets/browsers.png';

export default function Browser(){
    return(
        <div className='browser-parent'>
            <div className='browser-container'>
                 <p className='browser-heading'>Supported by All Popular Browsers</p>

                 <p className='browser-description'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>

                 
            </div>
            <img src={browsers} className='browser-image'></img>
        </div>
    );
}
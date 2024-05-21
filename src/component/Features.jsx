import './Features.css'
import bolt from '../assets/bolt.png';
import thumb from '../assets/thumbs_up.png';
import moon from '../assets/moon.png';

export default function Features(){
    return(
        <div className='feature-parent'>
            <div className='feature-container'>
                 <p className='feature-heading'>Supported by All Popular Browsers</p>

                 <p className='feature-description'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>

            <div className='feature-cards'>

                <div className='card'>
                    <img src={bolt} className='bolt'></img>
                    <p className='heading'>Light Weight</p>
                    <p className='description'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className='card'>
                    <img src={thumb} className='thumb'></img>
                    <p className='heading' >100% Responsive</p>
                    <p className='description'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className='card'>
                    <img src={moon} className='moon'></img>
                    <p className='heading'>User Friendly Interface</p>
                    <p className='description'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            
            
            </div>
            
        </div>
    );
}
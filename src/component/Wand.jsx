import wand from "../assets/magic_wand.png"
import './Wand.css';
export default function Wand(){
    const PurchaseFromEnvato = () =>{
        window.location.href = 'https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891';
    };
    
    return(
        <div className="wand-parent">
            <div className="content-box">
                <div className="turn">
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                    
                </div>
                <br></br>
                <div className="motion">
                    Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                </div>
                <br></br>
                <button className="purchase-wand" onClick={PurchaseFromEnvato}>Purchase from Envato →</button>
            </div>

            <img src={wand} alt="wand"  />
        </div>
    );
}
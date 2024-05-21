import './Cards.css'
import Section from '../assets/section_card.png';
import Page from '../assets/page_card.png';

export default function Cards(){
    const card = (heading,description,image) =>{
        return (
            <div className='card-elder'>
                
                <div className='card-heading'>{heading}</div>
                <div className='card-description'>{description}</div>
                <div>
                <img src={image} className="card-image" />
                </div>
                

            </div>
        );
        
    }

    return (
        <div className='parent-card'>
            <div className='card-apply'>
                <p>Apply On Any Section Or Enable <br></br> For Whole Page</p>
            </div>

            <div className='cards'>

                {card("Apply On Section","Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. ",Section)}

                {card("Apply On Page", "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.", Page)}
                
                
            </div>
        </div>
    );
}
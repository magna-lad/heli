import './Rating.css';
import fire from '../assets/fire.png';
import q_square from '../assets/q_square.png';
import wordpress from '../assets/wordpress.png';
import star from '../assets/stars.png';
export default function Rating(){
    return (
        <div className="rating-parent">
            <div className="trust">Trusted by thousands of users around the world</div>

            <div className="rating">

                <div className="fire">
                    <img src={fire} alt="fire" />

                    <div className='review'>
                        <img src={star} alt="star" />
                        <p> <span>4.5</span> Score, 9 Reviews</p>
                    </div>
                </div>
                
                <div className="q-square">
                    <img src={q_square} alt="q_square" />

                    <div className='review'>
                        <img src={star} alt="star" />
                        <p><span>4.5</span> Score, 9 Reviews</p>
                    </div>
                </div>
                
                <div className="wordpress">
                    <img src={wordpress} alt="wordpress" />

                    <div className='review'>
                        <img src={star} alt="star" />
                        <p><span>4.5</span> Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
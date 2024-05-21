import './Footer.css'

export default function Footer(){
    return(
        <div className='footer-parent'>
            <div>
                <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
            </div>

            <div className='hello' >
                <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className='link'>Documentation</a>

                <a href="https://support.qodematrix.com/" className='link'>Support</a>
            </div>
        </div>
    );
}
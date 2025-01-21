import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
             <img src={assets.logo} alt="" />
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illo corporis eum a id facere debitis veritatis perferendis neque, similique dolor, ut minima, consectetur beatae. Asperiores quisquam quis ducimus, aperiam itaque minima iure tenetur earum, nisi magni iste, reiciendis deleniti pariatur quia saepe. Quae dolores facere voluptate perferendis deserunt consequatur!</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>91 9703099066</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
<hr />
<p className='footer-copyright'>CopyRight 2024 Tomato.com </p>
    </div>
  )
}

export default Footer
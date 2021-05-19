import React from 'react';
import { Link } from "react-scroll";
import linked from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'
import fb from '../assets/icons/fb.svg'
import insta from '../assets/icons/insta.svg'
import './footer.scss';


class Footer extends React.Component{
state = {
    nav: false
}

   

    render(){
        return(
        
            <section className='footer'>
                 <h1 className='footer__name'>Kimnee Chen</h1>
                <h3 className='footer__position'>RMT</h3>

                <div className='footer__socials'>
                <img className='footer__socials--icon' src={linked} />
                <img className='footer__socials--icon special' src={mail} />
                <img className='footer__socials--icon' src={fb} />
                <img className='footer__socials--icon' src={insta} />
                </div>

                <div className='footer__links'>
                    <h3 className='footer__links--link'>FAQ</h3>
                    <h3 className='footer__links--link'>Cancellation Policy</h3>
                    <h3 className='footer__links--link'>Covid-19</h3>
                    <h3 className='footer__links--link'>Booking</h3>
                    <h3 className='footer__links--link'>Services</h3>
                    <h3 className='footer__links--link'>About</h3>
                </div>
            </section>
        )
    }
   
}export default Footer;
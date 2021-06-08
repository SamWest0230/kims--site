import React from 'react';
import { Link } from "react-scroll";
import linked from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'
import fb from '../assets/icons/fb.svg'
import insta from '../assets/icons/insta.svg'
import Covid from './modals/covid/covid';
import Cancellation from './modals/cancellation';
import FAQ from './modals/faq'
import './footer.scss';


class Footer extends React.Component{
state = {
    showCancel: false,
    showCovid: false,
    showFAQ: false
}
showCancel = () => {
    this.setState({
        showCancel: true
    })
    window.scrollTo(0,0);
}
closeCancel = () => {
    this.setState({
        showCancel: false
    })
}
showCovid = () => {
    this.setState({
        showCovid: true
    })
    window.scrollTo(0,0);
}
closeCovid = () => {
    this.setState({
        showCovid: false
    })
}
showFAQ = () => {
    this.setState({
        showFAQ: true
    })
    window.scrollTo(0,0);
}
closeFAQ = () => {
    this.setState({
        showFAQ: false
    })
}


   

    render(){
        return(
        
            <section className='footer'>
                {this.state.showCovid && <Covid close={this.closeCovid} />}
                {this.state.showCancel && <Cancellation close={this.closeCancel} />}
                {this.state.showFAQ && <FAQ close={this.closeFAQ} />}
                <div className='footer__info'>
                 <h1 className='footer__name'>Kimnee Chen</h1>
                <h3 className='footer__position'>RMT</h3>
                <p>kimnee.chen@gmail.com</p>
                </div>

                <div className='footer__socials'>
                <a href={"https://www.linkedin.com/in/kimnee-chen-645109140/"}>
                <img className='footer__socials--icon' src={linked} />
                </a>
                <a href={"mailto:name@domain"}>
                <img className='footer__socials--icon special' src={mail} />
                </a>
                <a href={"https://www.facebook.com/KimneeRMT "}>
                <img className='footer__socials--icon' src={fb} />
                </a>
                <a href={"https://www.instagram.com/kimneechenrmt/"}>
                <img className='footer__socials--icon' src={insta} />
                </a>
                </div>

                <div className='footer__links'>
                    <div className='footer__links--left'>
                    <h3 className='footer__links--link' onClick={this.showFAQ}>FAQ</h3>
                    <h3 className='footer__links--link' onClick={this.showCancel}>Cancellation Policy</h3>
                    <h3 className='footer__links--link' onClick={this.showCovid}>Covid-19</h3>
                    </div>
                    <div className='footer__links--right'>
                    <Link activeClass="active" to="booking" spy={true} smooth={true} duration={1000}>
                    <h3 className='footer__links--link'>Booking</h3>
                    </Link>
                    <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                    <h3 className='footer__links--link'>Services</h3>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                    <h3 className='footer__links--link'>About</h3>
                    </Link>
                    </div>
                </div>

                <div className='footer__socials2'>
                <a href={"https://www.linkedin.com/in/kimnee-chen-645109140/"}>
                <img className='footer__socials2--icon' src={linked} />
                </a>
                <a href={"mailto:name@domain"}>
                <img className='footer__socials2--icon special' src={mail} />
                </a>
                <a href={"https://www.facebook.com/KimneeRMT "}>
                <img className='footer__socials2--icon' src={fb} />
                </a>
                <a href={"https://www.instagram.com/kimneechenrmt/"}>
                <img className='footer__socials2--icon' src={insta} />
                </a>
                </div>
            </section>
        )
    }
   
}export default Footer;
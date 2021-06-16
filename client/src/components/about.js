import React from 'react';
import pin from '../assets/icons/pin.svg'
import check from '../assets/icons/check.svg'
import rocks from '../assets/images/rocks.jpg'
import kim from '../assets/images/kim.png'
import './about.scss';


const About = () => {

        return (

            <section className='about'>
                <div className='about__desk'>
                    <div className='about__info' >
                    <h1 className='about__info--text'>Hello</h1>
                    <h3 className='about__info--text'>My Name is Kimnee Chen</h3>
                    <div className='about__info--location'>
                    <p className='about__info--location-text'>Ajax, ON</p>
                    <img className='about__info--location-icon' alt='pin' src={pin} />
                    </div>
                    <p className='about__info--textdesk'>My name is Kim and I graduated from Centennial College in 2017. I am experienced in Swedish Massage with varying depths of pressure specific to each individual client. I strive to provide optimal treatments that will help decrease any pain, tension, or stress. <br /> <br />I  am capable of working with clients of all ages and provide many types of massage. Some modalities I offer include pregnancy massage, trigger point therapy, and deep tissue massage. Additionally, I provide clients with self care to do in between appointments. I believe my massages have a great flow that helps my clients relax as well as promote optimal health.</p> 
                    </div>

                    <div className='about__description'>
                    <img className='about__description--img' alt='Kim' src={kim} /> 
                    <p className='about__description--text'>My name is Kim and I graduated from Centennial College in 2017. I am experienced in Swedish Massage with varying depths of pressure specific to each individual client. I strive to provide optimal treatments that will help decrease any pain, tension, or stress. <br /> <br />I  am capable of working with clients of all ages and provide many types of massage. Some modalities I offer include pregnancy massage, trigger point therapy, and deep tissue massage. Additionally, I provide clients with self care to do in between appointments. I believe my massages have a great flow that helps my clients relax as well as promote optimal health. </p>  
                    </div>
                </div>   
                    <div className='about__benefits'>
                    <h2 className='about__benefits--title'>My Massages Offer</h2>
                    <img className='about__benefits--pic' alt='rocks' src={rocks} />
                    
                    <div className='about__benefits--desk'>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Stress Reduction</h3>
                    <img className='about__benefits--container-icon' alt='checkmark' src={check} />
                    </div>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Relaxation</h3>
                    <img className='about__benefits--container-icon' alt='checkmark'  src={check} />
                    </div>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Improved Quality of Sleep</h3>
                    <img className='about__benefits--container-icon' alt='checkmark'  src={check} />
                    </div>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Migraine and Headache Relief</h3>
                    <img className='about__benefits--container-icon' alt='checkmark'  src={check} />
                    </div>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Muscle Pain and Tension Relief</h3>
                    <img className='about__benefits--container-icon' alt='checkmark'  src={check} />
                    </div>

                    <div className='about__benefits--container'>
                    <h3 className='about__benefits--container-text' >Improved Joint Mobility and Range of Motion</h3>
                    <img className='about__benefits--container-icon' alt='checkmark'  src={check} />
                    </div>
                    </div>
                    </div>
                    
            </section>
        )


}; export default About;
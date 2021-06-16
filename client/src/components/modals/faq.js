import React from 'react';
import Close from "../.././assets/icons/close-24px.svg";
import { Link } from "react-scroll";
import './faq.scss';

const FAQ = (props) => {
    return (
        <section className='modal'>
            <div className='faq'>
            <Link className='modal__info--a' activeClass="active" to="footer" spy={true} smooth={true} duration={500}>  
            <img src={Close} className="faq__close" onClick={props.close} alt='close' />
            </Link>
                <h1 className='faq__title'>F.A.Q</h1>
                
           
            <div className='faq__info'>
                <h3 className='faq__info--question'>Location?</h3>
                <p className='faq__info--answer'>I am a mobile massage therapist, which means I come to you! You can get a massage treatment in the comfort of your own home.</p>
                <hr />
                <h3 className='faq__info--question'>Where in the house will the massage take place?</h3>
                <p className='faq__info--answer'>In a room of your choice that allows me to move around the massage table with a comfortably amount of space .</p>
                <hr />
                <h3 className='faq__info--question'>Will there be music during my massage?</h3>
                <p className='faq__info--answer'>Yes, if you would like music, I can provide some during the treatment</p>
                <hr />
                <h3 className='faq__info--question'>Payment?</h3>
                <p className='faq__info--answer'>I accept Cash, E-transfer, Visa, Mastercard, or American Express</p>
                <hr />
                <h3 className='faq__info--question'>Do I need to wear a Mask?</h3>
                <p className='faq__info--answer'>yes, to ensure safety of both the client and myself.</p>
                <hr />
                <h3 className='faq__info--question'>Where are you located, and far can you travel?</h3>
                <p className='faq__info--answer'>I am located in Ajax and can travel around Durham Region and York Region. Please note that there will be an extra fee depending on how far I must travel. The travel fee will be determined and disclosed to you during the booking process.</p>
                <hr />
            </div>
            </div>

        </section>

    )
}; export default FAQ;
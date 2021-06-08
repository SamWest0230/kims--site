import React from 'react';
import { Link } from "react-scroll";
import './hero.scss';


const Hero = () => {

        return (

            <section className='hero'>
                 <div className='hero__container'>
                    <h1 className='hero__container--text'>Kimnee</h1>
                    <p className='hero__container--text2'>RMT</p>
                    <hr className='hero__container--text2-hr' />
                
                    <div className='hero__container--btns'>
                    <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                        <button className='hero__container--btns-btn'>PRICES</button>
                    </Link>
                    <Link activeClass="active" to="booking" spy={true} smooth={true} duration={1000}>
                        <button className='hero__container--btns-btn'>BOOK</button>
                        </Link>
                    </div>
                </div>
            </section>
        )


}; export default Hero;
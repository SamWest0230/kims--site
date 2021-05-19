import React from 'react';
import './hero.scss';


const Hero = () => {

        return (

            <section className='hero'>
                 <div className='hero__container'>
                    <h1 className='hero__container--text'>Kimnee</h1>
                    <p className='hero__container--text2'>RMT</p>
                
                    <div className='hero__container--btns'>
                        <button className='hero__container--btns-btn'>PRICES</button>
                        <button className='hero__container--btns-btn'>BOOK</button>
                    </div>
                </div>
            </section>
        )


}; export default Hero;
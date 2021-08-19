import React from 'react';
import { Link } from "react-scroll";
import './nav.scss';
import burger from '../assets/icons/burger.svg'

class Nav extends React.Component{
state = {
    nav: false
}
 showNav = () =>{
        if (this.state.nav === false){
        this.setState({
            nav: true
        })
    }if(this.state.nav === true){
        document.getElementById('menu').classList.remove('show')
        document.getElementById('menu').classList.add('menu')
         this.setState({
        nav: false
        }) 
        }
    }
   

    render(){
        if(this.state.nav === true){
            document.getElementById('menu').classList.remove('menu')
            document.getElementById('menu').classList.add('show')
        }
        return(
        
            <section className='nav'>
                <img className='nav__burger' alt='menu' src={burger} onClick={ () => this.showNav()} />
                
                <div className='desk'>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <p className='desk__link'>About</p>
                </Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>Services</p>
                  </Link>
                  <Link activeClass="active" to="booking" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>Booking</p>
                  </Link>
                  <Link activeClass="active" to="testimonials" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>Testimonials</p>
                  </Link>
                  <Link activeClass="active" to="footer" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>Contact Me</p>
                  </Link>
                </div>

                <h1 className='nav__name'>Kimnee Chen</h1>
                
                <div className='menu' id='menu'>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <p className='show__link'>About</p>
                </Link>
                <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Services</p>
                  </Link>
                  <Link activeClass="active" to="booking" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Booking</p>
                  </Link>
                  <Link activeClass="active" to="testimonials" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Testimonials</p>
                  <Link activeClass="active" to="footer" spy={true} smooth={true} duration={1000}>
                  <p className='show__link'>Contact Me</p>
                  </Link>
                  </Link>
                </div>  
    
            </section>
        )
    }
   
}export default Nav;
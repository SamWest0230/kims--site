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
                <img className='nav__burger' src={burger} onClick={ () => this.showNav()} />
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
                  </Link>
                </div>

                <div className='desk'>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <p className='desk__link'>ABOUT</p>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>PROJECTS</p>
                  </Link>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>BOOKING</p>
                  </Link>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                  <p className='desk__link'>TESTIMONIALS</p>
                  </Link>
                </div>
    
            </section>
        )
    }
   
}export default Nav;
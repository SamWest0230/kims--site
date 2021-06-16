import React from 'react';
import Close from "../.././assets/icons/close-24px.svg";
import { Link } from "react-scroll";
import './popUp.scss';

const Popup = (props) => {
    return (
        <section className='modal3'>
            <div className='modal__info'>
            <Link className='modal__info--a' activeClass="active" to="booking" spy={true} smooth={true} duration={500}>
                <img src={Close} className="modal__info--close" onClick={props.close} alt='close' />
                </Link>
                <h2 className='modal__info--title'>Email Successfully Sent</h2>
            </div>

        </section>

    )
}; export default Popup;
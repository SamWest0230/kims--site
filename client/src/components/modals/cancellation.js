import React from 'react';
import Close from "../.././assets/icons/close-24px.svg";
import { Link } from "react-scroll";
import './cancellation.scss';

const Covid = (props) => {
    return (
        <section className='modal2'>
            <div className='modal__info'>
            <Link className='modal__info--a' activeClass="active" to="booking" spy={true} smooth={true} duration={500}>
                <img src={Close} className="modal__info--close" alt='close' onClick={props.close} />
                </Link>
                <h2 className='modal__info--title'>Cancellation Policy</h2>
                <p className='modal__info--text'>Please note that there is a 24-hour cancellation policy. The client must notify the therapist 24 hours prior to their treatment time if they need to cancel and/or reschedule their appointment. Failure to do so will result in a cancellation fee of the full treatment price. </p>
            </div>

        </section>

    )
}; export default Covid;
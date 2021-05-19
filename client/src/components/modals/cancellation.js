import React from 'react';
import Close from "../.././assets/icons/close-24px.svg";
import './cancellation.scss';

const Covid = (props) => {
    return (
        <section className='modal'>
            <div className='cancellation__info'>
                <h2>Cancellation Policy</h2>
                <img src={Close} className="modal__close" onClick={props.close} />
                <p>Please note that there is a 24-hour cancellation policy. The client must notify the therapist 24 hours prior to their treatment time if they need to cancel and/or reschedule their appointment. Failure to do so will result in a cancellation fee of the full treatment price. </p>
            </div>

        </section>

    )
}; export default Covid;
import React from 'react';
import Close from "../../.././assets/icons/close-24px.svg";
import './covid.scss';

const Covid = (props) => {
    return (
        <section className='modal'>
            <div className='modal__header'>
            <img src={Close} className="modal__close" alt='close' onClick={props.close} />
            <h1 className='modal__header--name'>Covid-19 Information and Policies</h1>
            <h3 className='modal__header--info'>Registered Massage Therapists are a Regulated Health Profession and can continue working during COVID-19 lockdown.</h3>
            </div>

            <div className='modal__disclaimer'>
            <h2 className='modal__disclaimer--client'>Clients MUST</h2>
            <ul className='modal__disclaimer--list'>
                <li className='modal__disclaimer--list-item'>Wear a mask for entire duration of the appointment, until I leave your home. </li>
                <li className='modal__disclaimer--list-item'>Sanitize hands before the appointment. </li>
                <li className='modal__disclaimer--list-item'>Be the only person in the room during the appointment.</li>
            </ul>
            </div>
            
           
            <div className='modal__info'>
            <h2 className='modal__info--name'>Reschedule or Cancel if you are experiencing any of the symptoms below</h2>
            <ul className='modal__list'>
                <li className='modal__list--item'>new or worsening cough</li>
                <li className='modal__list--item'>shortness of breath or difficulty breathing</li>
                <li className='modal__list--item'>temperature equal to or over 38°C</li>
                <li className='modal__list--item'>feeling feverish</li>
                <li className='modal__list--item'> chills</li>
                <li className='modal__list--item'>fatigue or weakness</li>
                <li className='modal__list--item'> muscle or body aches</li>
                <li className='modal__list--item'>new loss of smell or taste</li>
                <li className='modal__list--item'> headache</li>
                <li className='modal__list--item'>gastrointestinal symptoms (abdominal pain, diarrhea, vomiting)</li>
                <li className='modal__list--item'>feeling very unwell</li>
            </ul>
            </div>
        

        </section>

    )
}; export default Covid;
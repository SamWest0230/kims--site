import React from 'react';
import './prices.scss';
import prices from '../data/booking.json'

class Booking extends React.Component{

    render(){
        return(

            <section className='booking'>
               <form className='booking__form'>
                    <label className='booking__form--label'>Full Name</label>
                    <input className='booking__form--input' type='text' name='name'></input>

                    <label className='booking__form--label'>Phone Number</label>
                    <input className='booking__form--input' type='tel' name='phone'></input>

                    <label className='booking__form--label'>Email</label>
                    <input className='booking__form--input' type='email' name='email'></input>

                    <label className='booking__form--label'>Type of Appoitment</label>
                    <select className='booking__form--input' name='appoitment'>
                        <option value='none'>Please Select</option>
                        {prices.map(price => {
                            return(
                            <option value={price.name}>{price.name}</option>
                        )})}
                    </select>

                    <label className='booking__form--label'>Preffered Appoitment Date</label>
                    <input className='booking__form--input' type='date' name='date'></input>

                    <label className='booking__form--label'>Please list any Health Concerns or Medical Conditions If you feel Necessary</label>
                    <input className='booking__form--input' type='textarea' name='health'></input>
               </form>
               <div className='booking__cancellation'>
                    <h2>Cancellation Policy</h2>
                    <p className='booking__cancellation--text'>Please note that there is a 24-hour cancellation policy. The client must notify the therapist 24 hours prior to their treatment time if they need to cancel and/or reschedule their appointment. Failure to do so will result in a cancellation fee of the full treatment price. If the client has an emergency, only then will the cancellation fee be waived. This may include illness, extreme weather, and family emergencies.</p>
               </div>
            </section>
        )


}}; export default Booking;
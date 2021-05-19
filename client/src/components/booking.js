import React from 'react';
import './booking.scss';
import Cancellation from './modals/cancellation';
import prices from '../data/booking.json'

class Booking extends React.Component{

    state = {
        showmodal: false
    }
    showModal = () => {
        this.setState({
            showmodal: true
        })
    }
    closeModal = () => {
        this.setState({
            showmodal: false
        })
    }

    render(){
        return(

            <section className='booking'>
                {this.state.showmodal && <Cancellation close={this.closeModal} />}
                <h2 className='booking__title'>Booking</h2>
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

                    <label className='booking__form--label'>Your Location</label>
                    <input className='booking__form--input' type='address' name='address'></input>

                    <label className='booking__form--label'>Please list any Health Concerns or Medical Conditions If you feel Necessary</label>
                    <input className='booking__form--input' type='textarea' name='health'></input>
               </form>
               <div className='booking__cancellation'>
                    <h2 className='booking__cancellation--text' onClick={this.showModal}>Click to View Cancellation Policy</h2>
                    
                    
               </div>
            </section>
        )


}}; export default Booking;
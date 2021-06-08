import React from 'react';
import './booking.scss';
import Cancellation from './modals/cancellation';
import prices from '../data/booking.json'
import axios from 'axios'

class Booking extends React.Component{

    state = {
        showmodal: false,
        name: "",
        phone: "",
        email: "",
        appoitment: "",
        address: "",
        date: "",
        time:"",
        health: "",

    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    showModal = () => {
        this.setState({
            showmodal: true
        })
        window.scrollTo(0,0);
    }
    closeModal = () => {
        this.setState({
            showmodal: false
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegEx = /^\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/
        const emailRegEx = /^([a-z.0-9]+)@([a-z.0-9]+).(com|ca)$/
    
        const {name, phone, email, appoitment, address, date, time, health } = this.state;
        if (!name || !address || !date || !time || !appoitment || !phone || (phone && !phone.match(phoneRegEx)) || !email || (email && !email.match(emailRegEx))) {
          if(!name) {
            document.getElementById("name").classList.add("error");
          }
          if(!appoitment) {
            document.getElementById("appoitment").classList.add("error");
          }
          if(!address) {
            document.getElementById("address").classList.add("error");
          }
          if(!date) {
            document.getElementById("date").classList.add("error");
          }
          if(!time) {
            document.getElementById("time").classList.add("error");
          }
          if((phone && !phone.match(phoneRegEx)) || !phone) {
            document.getElementById("phone").classList.add("error");
          }
          if((email && !email.match(emailRegEx)) || !email) {
            document.getElementById("email").classList.add("error");
          }
        };
    
        const massage= {
          name: name,
          phone: phone,
          email: email,
          appoitment: appoitment,
          address: address,
          date: date,
          time: time,
          health: health,
        }
        console.log(massage)
        axios
          .post("http://localhost:8080/booking", massage)
          .then (response => {
            if (response.status === 200) {
              this.setState({
                isSubmitted: true
              })
            }
          })
          .catch(err => {
            console.log(err);
          });
      }

    render(){
        return(

            <section className='booking'>
                {this.state.showmodal && <Cancellation close={this.closeModal} />}
                <h2 className='booking__title'>Booking</h2>
               <form className='booking__form' onSubmit={this.handleSubmit}>
               <div className='booking__form--left'>
                    <label className='booking__form--label'>Full Name</label>
                    <input id="name" className='booking__form--input' type='text' name='name' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Phone Number</label>
                    <input id="phone" className='booking__form--input' type='tel' name='phone' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Email</label>
                    <input id="email" className='booking__form--input' type='email' name='email' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Type of Appointment</label>
                    <select className='booking__form--input' onChange={this.handleChange} name='appoitment'>
                        <option value='none'>Please Select</option>
                        {prices.map(price => {
                            return(
                            <option id='appoitment' value={price.name}>{price.name}</option>
                        )})}
                    </select>
                    </div>
                    <div className='booking__form--right'>
                    <label className='booking__form--label'>Your Location</label>
                    <input id='address' className='booking__form--input' type='address' name='address' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Preffered Appointment Date</label>
                    <input id='date' className='booking__form--date' type='date' name='date' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Preffered Appointment Time</label>
                    <input id='time' className='booking__form--date' type='time' name='time' onChange={this.handleChange}></input>

                    <label className='booking__form--label'>Please list any Health Concerns or Medical Conditions If you feel Necessary</label>
                    <textarea id='health' className='booking__form--input' type='textarea' name='health' onChange={this.handleChange}></textarea>

                    <button type='submit' className='booking__form--btn'>Book</button>
                    </div>
               </form>
               <div className='booking__cancellation'>
                    <h2 className='booking__cancellation--text' onClick={this.showModal}>Click to View Cancellation Policy</h2>
                    
                    
               </div>
            </section>
        )


}}; export default Booking;
import React from 'react';
import './booking.scss';
import Cancellation from './modals/cancellation';
import Popup from './modals/popUp';
import prices from '../data/booking.json'
import axios from 'axios'
class Booking extends React.Component{

    state = {
        showmodal: false,
        Popup: false,
        name: "",
        phone: "",
        email: "",
        appointment: "",
        address: "",
        date: "",
        time:"",
        health: "",

    }
    handleChange = (e) => {
      console.log(e.target.value)
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
    Popup = () => {
      this.setState({
          Popup: true
      })
      window.scrollTo(0,0);
  }
    closeModal = () => {
        this.setState({
            showmodal: false,
            Popup: false
        })
        
    }
    alert = () => {
      window.alert("Email Sent")
      document.getElementById("form").reset();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegEx = /^\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/
        const emailRegEx = /^([a-z.0-9]+)@([a-z.0-9]+).(com|ca)$/
    
        const {name, phone, email, appointment, address, date, time, health } = this.state;
        if (!name || !address || !date || !time || !appointment || !phone || (phone && !phone.match(phoneRegEx)) || !email || (email && !email.match(emailRegEx))) {
          if(!name) {
            document.getElementById("name").classList.add("error");
          }
          if(!appointment) {
            document.getElementById("appointment").classList.add("error");
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
          return;
        }
        document.getElementById("name").classList.remove("error");
        document.getElementById("appointment").classList.remove("error");
        document.getElementById("address").classList.remove("error");
        document.getElementById("date").classList.remove("error");
        document.getElementById("time").classList.remove("error");
        document.getElementById("phone").classList.remove("error");
        document.getElementById("email").classList.remove("error");
    
        const massage= {
          name: name,
          phone: phone,
          email: email,
          appointment: appointment,
          address: address,
          date: date,
          time: time,
          health: health,
        }
        axios
          .post( massage)
          .then (response => {
            console.log(response)
            if (response.status === 200) {
              this.Popup()
              document.getElementById("form").reset();
            }
          })
          .catch(err => {
            console.log(err);
          });
          // this.alert();
      }

    render(){
        return(

            <section className='booking'>
                {this.state.showmodal && <Cancellation close={this.closeModal} />}
                {this.state.Popup && <Popup close={this.closeModal} />}
                <h2 className='booking__title'>Booking</h2>
               <form id='form' className='booking__form' onSubmit={this.handleSubmit}>
               <div className='booking__form--left'>
                    <label className='booking__form--label' htmlFor='name'>Full Name</label>
                    <input id="name" className='booking__form--input' type='text' name='name' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='phone'>Phone Number</label>
                    <input id="phone" className='booking__form--input' type='tel' name='phone' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='email'>Email</label>
                    <input id="email" className='booking__form--input' type='email' name='email' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='appointment'>Type of Appointment</label>
                    <select className='booking__form--input' onChange={this.handleChange} id='appointment' name='appointment'>
                        <option value='none'>Please Select</option>
                        {prices.map(price => {
                            return(
                            <option id='appointment' onChange={this.handleChange} value={price.name}>{price.name}</option>
                        )})}
                    </select>
                    </div>
                    <div className='booking__form--right'>
                    <label className='booking__form--label' htmlFor='address'>Your Location</label>
                    <input id='address' className='booking__form--input' type='address' name='address' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='date'>Preferred Appointment Date</label>
                    <input id='date' className='booking__form--date' type='date' name='date' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='time'>Preferred Appointment Time</label>
                    <input id='time' className='booking__form--date' type='time' name='time' onChange={this.handleChange}></input>

                    <label className='booking__form--label' htmlFor='health'>Please list any health concerns or medical conditions if you feel necessary</label>
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
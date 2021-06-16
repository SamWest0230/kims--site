import React from 'react';
import './testimonials.scss';
import test from '../data/testimonials.json'
import left from '../assets/icons/arrow-left.svg'
import right from '../assets/icons/arrow-right.svg'

class Testimonials extends React.Component {
    state = {
        reviews: test,
        currentReview: test[0]
    }

    next = () => {
        let newID = this.state.currentReview.id
        if (newID === 4) {
            const ID = 1;
            const newReview = this.state.reviews.filter(review => {
                return review.id === ID;
            })
            this.setState({
                currentReview: newReview[0]
            })
        } else {
            let newID = this.state.currentReview.id + 1;
            const newReview = this.state.reviews.filter(review => {
                return review.id === newID;
            })
            this.setState({
                currentReview: newReview[0]
            })
        }
       
    }
    previous = () => {
        let newID = this.state.currentReview.id
        if (newID === 1) {
            const ID = 4;
            const newReview = this.state.reviews.filter(review => {
                return review.id === ID;
            })
            this.setState({
                currentReview: newReview[0]
            })
        } else {
            let newID = this.state.currentReview.id - 1;
            const newReview = this.state.reviews.filter(review => {
                return review.id === newID;
            })
            this.setState({
                currentReview: newReview[0]
            })
        }
    }

    render() {
        const test = this.state.currentReview
        return (

            <section className='testimonials'>
                <h2 className='testimonials__title'>Testimonials</h2>
                <div className='testimonials__container'>
                    <img  className='testimonials__container--arrow' alt='arrow' onClick={this.previous} src={left} />
                    <div className='testimonials__container--card'>
                        <p className='testimonials__container--card-review'>{test.review}</p>
                        <h3 className='testimonials__container--card-name'>-{test.name}</h3>
                    </div>
                    <img  className='testimonials__container--arrow' alt='arrow' onClick={this.next} src={right} />
                </div>

            </section>

        )
    }

}; export default Testimonials;
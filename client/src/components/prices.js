import React from 'react';
import './prices.scss';
import { Link } from "react-scroll";
import prices from '../data/pricing.json'

const Price = () => {

        return (

            <section className='services'>
                <h2 className='services__title'>Services</h2>
                {prices.map(price => {
                    return (
                    <div className='services__card'>
                        <h2 className='services__card--name'>{price.name}</h2>
                        <div className className='services__card--container'>
                        <h3 className='services__card--container-price'>{price.Price}</h3>
                        </div>
                    </div>
                )})}
            </section>
        )


}; export default Price;
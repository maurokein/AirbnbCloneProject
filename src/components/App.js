import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from '../data';



export default function App(){
    const cards = data.map(card => 
    <Card 
        key = {card.id}
        img = {card.coverImg}
        punctuation = {card.stats.rating}
        counter = {card.stats.reviewCount}
        location = {card.location}
        title = {card.title}
        price = {card.price} />)
    return(
        <div>
            <Navbar />
            <Hero />
            <section className='cards--list'>
                {cards}
            </section>
        </div>
    )
}
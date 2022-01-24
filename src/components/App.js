import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from '../data';



export default function App(){
    const cards = data.map(card => 
    <Card 
        key = {card.id}
        card = {card} // {...item} => equal states of item 
         />)
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
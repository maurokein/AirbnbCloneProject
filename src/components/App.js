import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Image from '../images/swimmerimage.png'

export default function App(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Card
                img = {Image}
                punctuation = {5.0}
                counter = {6}
                country = "USA"
                title = "Life lessons with Katie Zaferes"
                price = {136}
            />
        </div>
    )
}
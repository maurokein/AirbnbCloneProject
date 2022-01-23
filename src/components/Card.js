import React from 'react';
import Icon from '../images/staricon.png'
import Ellipse from '../images/ellipseicon.png'

export default function Card(props){
    return(
        <section className='card'>
            <img src={props.img} alt='{props.img}' className='card--image'/>
            <div className='card--reviews'>
                <img src={Icon} alt='staricon' className='card--reviews__star'/>
                <span className='card--reviews__punctuation'>{props.punctuation}</span>
                <span className='card--reviews__counter'>({props.counter})</span>
                <span><img src={Ellipse} alt='ellipse' className='card--reviews__ellipse'/></span>
                <span className='card--reviews__country'>{props.location}</span>
            </div>
            <span className='card--title'>{props.title}</span>
            <br/>
            <span className='card--price'>From ${props.price}</span>
            <span className='card--person'> / person</span>
        </section>
    )
}
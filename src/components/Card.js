import React from 'react';
import Image from '../images/swimmerimage.png'
import Icon from '../images/staricon.png'
import Ellipse from '../images/ellipseicon.png'

export default function Card(){
    return(
        <section className='card'>
            <img src={Image} alt='smilingswimmer' className='card--image'/>
            <div className='card--reviews'>
                <img src={Icon} alt='staricon' className='card--reviews__star'/>
                <span className='card--reviews__punctuation'>5.0</span>
                <span className='card--reviews__counter'>(6)</span>
                <span><img src={Ellipse} alt='ellipse' className='card--reviews__ellipse'/></span>
                <span className='card--reviews__country'>USA</span>
            </div>
            <span className='card--title'>Life lessons with Katie Zaferes</span>
            <br/>
            <span className='card--price'>From $136</span>
            <span className='card--person'> / person</span>
        </section>
    )
}
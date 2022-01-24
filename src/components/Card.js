import React from 'react';
import Icon from '../images/staricon.png'
import Ellipse from '../images/ellipseicon.png'

export default function Card(props){
    /* USE OF PLAIN JAVASCRIPT IN ORDER TO DECIDE WHAT TO DISPLAY ON PAGE */
    let badgeText
    if (props.card.openSpots === 0) { 
        badgeText = "SOLD OUT"
    }else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <section className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.card.coverImg} alt='{props.img}' className='card--image'/>
            <div className='card--reviews'>
                <img src={Icon} alt='staricon' className='card--reviews__star'/>
                <span className='card--reviews__punctuation'>{props.card.stats.rating}</span>
                <span className='card--reviews__counter'>({props.card.stats.reviewCount})</span>
                <span><img src={Ellipse} alt='ellipse' className='card--reviews__ellipse'/></span>
                <span className='card--reviews__country'>{props.card.location}</span>
            </div>
            <span className='card--title'>{props.card.title}</span>
            <br/>
            <span className='card--price'>From ${props.card.price}</span>
            <span className='card--person'> / person</span>
        </section>
    )
}
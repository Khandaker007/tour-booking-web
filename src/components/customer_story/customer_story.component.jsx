import React from 'react'

import './customer_story.style.scss'

const CustomerStory = ({image, header, text, name}) => (
    <div className="story">
        <figure className="story__shape">
            <img src={image} alt="person image" className="story__img"/>
            <figcaption className="story__caption">{name}</figcaption>
        </figure>
        <div className="story__text">
            <h3 className="heading-tertiary">{header}</h3>
            <p>{text}</p>
        </div>
    </div>
)

export default CustomerStory;
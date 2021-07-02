import React from 'react'

import './feature_card.style.scss';

const FeatureCard = ({cardHeader, cardText, cardIcon}) => (
        <div className="feature-card">
            <h1 className='feature-card__logo'>{cardIcon}</h1>
            <h3 className="feature-card__header">{cardHeader}</h3>
            <p className="feature-card__text">{cardText}</p>
        </div>
)

export default FeatureCard;
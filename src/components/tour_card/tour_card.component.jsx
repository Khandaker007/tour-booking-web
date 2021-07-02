import React from 'react'

import './tour_card.style.scss';

const TourCard = ({image, heading, details}) => (
    <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture" style={{backgroundImage:`url(${image})`}}>
                    &nbsp;
                </div>
                <h4 className="card__heading">{heading}</h4>
                <div className="card__details">
                    <ul>
                        <li>{details.line1}</li>
                        <li>{details.line2}</li>
                        <li>{details.line3}</li>
                        <li>{details.line4}</li>
                        <li>{details.line5}</li>
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-color">BACK</div>
    </div>
)

export default TourCard;
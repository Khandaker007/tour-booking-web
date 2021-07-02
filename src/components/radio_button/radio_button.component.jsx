import React from 'react'

import './radio_button.style.scss'

const RadioButton = ({id, label, ...otherProps}) => (
    <div className="radio">
        <input className="radio__input" id={id} {...otherProps}/>
        <label htmlFor={id} className="radio__label">
            <span className='radio__button'></span>
            {label}
        </label>
    </div>
)

export default RadioButton;
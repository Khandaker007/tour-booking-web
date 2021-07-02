import React from 'react'

import './form_input.style.scss'

const FormInput = ({id, label, ...otherProps}) => (
    <div className="group">
        <input id={id} className="group__input" {...otherProps} />
        <label htmlFor={id} className="group__label">{label}</label>
    </div>
)

export default FormInput;
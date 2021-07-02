import React from 'react'

import './button.style.scss'

const Button = ({text, buttonColor, onclick}) => (
    <div>
        <a href='#' onClick={onclick} className={`btn ${{buttonColor} = 'green' ? 'btn--green' : ''} btn--white `}>{text}</a>
    </div>
)

export default Button;
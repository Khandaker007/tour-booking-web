import React from 'react'

// COMPONENT
import Button from '../button/button.component'

import logo from '../../assets/logo/logo.png'

import './header.style.scss'

const Header = () => {
    return(
        <div className='header'>
            <div className="header__logo-box">
                <img src={logo} alt='logo' className='header__logo'/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <Button text='Discover our works' />
                {/* <a href='#' className='btn btn--white'>Discover our works</a> */}
            </div>
        </div>
    )
    
}

export default Header;
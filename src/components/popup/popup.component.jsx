import React from 'react'

import '../../sass/utility.scss';
import './popup.style.scss'

import popupImg1 from '../../assets/image/popup-img-1.jpg'
import popupImg2 from '../../assets/image/popup-img-2.jpg'

const Popup = ({closePopup, trigger}) => (trigger) ? (
    <div className="popup" id='popup'>
        <div className="popup__content">
            <div className="popup__left">
                <img src={popupImg1} alt="popup image" className="popup__img" />
                <img src={popupImg2} alt="popup image" className="popup__img" />
            </div>
            <div className="popup__right">
                <a href='#section-about' className="popup__close" onClick={() => closePopup(false)}>&times;</a>
                <h2 className="heading-secondary u-margin-bottom-2">Start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-2">Important &ndash; Please read these terms before booking</h3>
                <p className="popup__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
        </div>
    </div>
) : '';

export default Popup;
import React from 'react'

// DATA
import CUSTOMER_COMMENT_DATA from '../data/customer_comment.data'
import TOUR_CARD_DATA from '../data/section_tour.data'

// COMPONENT
import FeatureCard from '../../components/feature_card/feature_Card.component'
import TourCard from '../../components/tour_card/tour_card.component'
import Button from '../../components/button/button.component'
import CustomerStory from '../../components/customer_story/customer_story.component'
import FormInput from '../../components/form_input/form_input.component'
import RadioButton from '../../components/radio_button/radio_button.component'
import Popup from '../../components/popup/popup.component'

// SASS
import './home_page.style.scss'
import '../../sass/utility.scss'

// IMAGES
import photo1 from '../../assets/image/33.jpg'
import photo2 from '../../assets/image/43.jpg'
import photo3 from '../../assets/image/52.jpg'
import logo from '../../assets/logo/logo.png'

// VIDEO
import backgroundVideo from '../../assets/video/bg-video.mp4'

class HomePage extends React.Component {

    constructor(props){
      super(props);
  
      this.state ={
        tourCardData: TOUR_CARD_DATA,
        customerCommentData: CUSTOMER_COMMENT_DATA,
        trigger: false
      }
    }

    handleClick = (event) => {
      event.preventDefault()
      this.setState({trigger: true})
    }

    closePopup = (event) => {
      this.setState({
        trigger: event
      })
    }
  
    render(){
      const {tourCardData, customerCommentData, trigger} = this.state;
      return(
        <div className="home-page" id='home-page'>
            <section className="section-about" id='section-about'>
              <div className="u-center-text u-margin-bottom-8">
                <h1 className="heading-secondary">Exciting tours for adventure people</h1>
              </div>
              <div className="row">
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary">
                    Lorem Ipsum is simply dummy text of the printing
                  </h3>
                  <p className="paragraph">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal.
                  </p>
  
                  <h3 className="heading-tertiary">Where does it come from?</h3>
                  <p className="paragraph">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old. Richard McClintock.
                  </p>
  
                  <a href="#" className="btn-text" onClick={this.handleClick}>
                    Learn more &rarr;
                  </a>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img
                      src={photo1}
                      alt="photo 1"
                      className="composition__photo composition__photo--p1"
                    />
                    <img
                      src={photo2}
                      alt="photo 2"
                      className="composition__photo composition__photo--p2"
                    />
                    <img
                      src={photo3}
                      alt="photo 3"
                      className="composition__photo composition__photo--p3"
                    />
                  </div>        
                </div>
              </div>
            </section>
            <section className="section-features">
                <div className="card-container">
                  <FeatureCard cardIcon='ICON' cardHeader="explore the world" cardText="It is a long established fact that a reader will be distracted by the readable."/>
                  <FeatureCard cardIcon='ICON' cardHeader="meet nature" cardText="It is a long established fact that a reader will be distracted by the readable."/>
                  <FeatureCard cardIcon='ICON' cardHeader="find your way" cardText="It is a long established fact that a reader will be distracted by the readable."/>
                  <FeatureCard cardIcon='ICON' cardHeader="live a healthier life" cardText="It is a long established fact that a reader will be distracted by the readable."/>
                </div>
            </section>
  
            <section className="section-tours">
              <div className="u-center-text u-margin-bottom-8">
                <h1 className="heading-secondary">Exciting tours adventure</h1>
              </div>
              <div className="card-container">
                {
                  tourCardData.map(({id, ...otherTourCardDataProps}) => <TourCard key={id} {...otherTourCardDataProps} />)
                }
              </div>
                <Button text='discover all tours' buttonColor='green' onclick={this.handleClick}/>
            </section>
            <section className='section-story'>
              <div className="bg-video">
                <video className="bg-video__content" autoPlay mute loop>
                  <source src={backgroundVideo} type='video/mp4'/>
                  Your browser did not supported!
                </video>
              </div>
              <div className="u-center-text u-margin-bottom-8">
                <h1 className="heading-secondary">Exciting tours adventure</h1>
              </div>
              <div className="row">
                {
                  customerCommentData.map(({id, ...otherCustomerCommentDataProps}) => <CustomerStory key={id} {...otherCustomerCommentDataProps}/>)
                }
              <a href="#" className="btn-text">Learn more &rarr;</a>
              </div>
            </section>
            <section className="section-booking">
              <div className="booking" >
                <div className="booking__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-4">
                      <h3 className="heading-secondary">start booking now</h3>
                    </div>
                    <FormInput type='text' placeholder='Full Name' id='name' label='Full Name' required/>
                    <FormInput type='email' placeholder='Email Address' id='email' label='Email Address' required/>
                    <RadioButton type='radio' id='small' name='size' label='Small group tour'/>
                    <RadioButton type='radio' id='large' name='size' label='Large group tour'/>
                    <Button text='next step &rarr;'/>
                  </form>
                </div>
              </div>
            </section>
            <footer className="footer">
              <div className="footer__logo-box">
                <img src={logo} alt="logo" className="footer__logo" />
              </div>
              <div className="row u-footer-row-width">
                <div className="col-1-of-2">
                  <hr className='footer__hr'/>
                  <div className="footer__navigation">
                    <ul className="footer__list">
                      <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                      <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                      <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                      <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                      <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <hr className='footer__hr'/>
                  <p className="footer__copyright">
                    Design of this page is not done by me. I just developed it from a UI 
                    Design of this page is not done by me. I just developed it from a UI
                    Design of this page is not done by me. I just developed it from a UI
                    Design of this page is not done by me. I just developed it from a UI
                  </p>
                </div>
              </div>
            </footer>
            <Popup trigger={trigger} closePopup={this.closePopup}/>
            <Popup/>
        </div>)
    }
  
  };
  
  export default HomePage;
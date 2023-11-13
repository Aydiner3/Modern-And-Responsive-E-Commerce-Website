import React from 'react'
import './footer.scss'
import Facebook from '../../assets/footer/Facebook.svg'
import Instagram from '../../assets/footer/Instagram.svg'
import Logo from '../../assets/footer/Logo Vector.svg'
import Tiktok from '../../assets/footer/Tiktok.svg'
import Twitter from '../../assets/footer/Twitter.svg'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </div>
            <div className='menu'>
                <span>Services</span>
                <a href="/">Bonus program</a>
                <a href="/">Gift Card</a>
                <a href="/">Credit and payment</a>
                <a href="/">Service contracts</a>
                <a href="/">Non-cash account</a>
                <a href="/">Payment</a>
            </div>
            <div className='menu'>
                <span>Assistance to the buyer</span>
                <a href="/">Find and order</a>
                <a href="/">Term of delivery</a>
                <a href="/">Exchange and return of goods</a>
                <a href="/">Guarantee</a>
                <a href="/">Frequently asked questions</a>
                <a href="/">Terms of use of the site</a>
            </div>
        </div>
        <div className='icons'>
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Tiktok} alt="tiktok" />
            <img src={Instagram} alt="instagram" />
        </div>
    </div>
  )
}

export default Footer
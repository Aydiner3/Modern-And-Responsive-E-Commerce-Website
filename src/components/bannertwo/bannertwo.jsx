import React from 'react'
import './bannertwo.scss'
import Watch from '../../assets/bannertwo/apple-watch.png'
import GoldMac from '../../assets/bannertwo/gold-mac.png'
import Iphone from '../../assets/bannertwo/iphone.png'
import Tablet from '../../assets/bannertwo/tablet.png'
import Tablet2 from '../../assets/bannertwo/tablet2.png'

const Bannertwo = () => {
  return (
    <div className='bannertwo-container'>
        <span>Big Summer <s>Sale</s></span>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <a href="/">Shop Now</a>
        {/* images */}
        <img className='watch' src={Watch} alt="watch" />
        <img className='gold-mac' src={GoldMac} alt="gold-macbook" />
        <img className='iphone' src={Iphone} alt="iphone-14" />
        <img className='tablet' src={Tablet} alt="tablet" />
        <img className='tablet2' src={Tablet2} alt="tablet2" />
    </div>
  )
}

export default Bannertwo
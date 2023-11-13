import React from 'react'
import './discount.scss'
import Like from '../../assets/sale/like.svg'
import Iphone from '../../assets/sale/iphone14.png'


const Discount = () => {
  return (
    <div className='discount-container'>
        <span>Discounts up to -50%</span>
        <div className="sale-items">
        <div className="item">
            <img className="like" src={Like} alt="like" />
            <img src={Iphone} alt="iphone14" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
            <span>$900</span>
            <a href="/">Buy Now</a>
        </div>
        <div className="item">
            <img className="like" src={Like} alt="like" />
            <img src={Iphone} alt="iphone14" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
            <span>$900</span>
            <a href="/">Buy Now</a>
        </div>
        <div className="item">
            <img className="like" src={Like} alt="like" />
            <img src={Iphone} alt="iphone14" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
            <span>$900</span>
            <a href="/">Buy Now</a>
        </div>
        <div className="item">
            <img className="like" src={Like} alt="like" />
            <img src={Iphone} alt="iphone14" />
            <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
            <span>$900</span>
            <a href="/">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

export default Discount
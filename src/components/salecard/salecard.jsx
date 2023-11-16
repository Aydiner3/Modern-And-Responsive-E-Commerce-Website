import React from 'react'
import 'salecard.scss'
import Like from '../../assets/sale/like.svg'


const Salecard = ({content,photo,price}) => {
  return (
    <div className="item">
            <img className="like" src={Like} alt="like" />
            <img src={photo} alt="iphone14" />
            <p>{content}</p>
            <span>{price}</span>
            <a href="/">Buy Now</a>
    </div>
  )
}

export default Salecard
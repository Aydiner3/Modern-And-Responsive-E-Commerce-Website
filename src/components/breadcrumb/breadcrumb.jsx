import React from 'react'
import LeftArrow from '../../assets/Arrow.png'
import './breadcrumb.scss'


const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
        <a href='/'>Home</a>
        <img src={LeftArrow} alt="left-arrow" />
        <a href='/'>Catalog</a>
        <img src={LeftArrow} alt="left-arrow" />
        <a href='/'>Smartphones</a>
    </div>
  )
}

export default Breadcrumb
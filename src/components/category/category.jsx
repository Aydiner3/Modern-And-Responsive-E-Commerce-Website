import React from 'react'
import './category.scss'
import LeftArrow from '../../assets/category/arrow-left.svg'
import RightArrow from '../../assets/category/arrow-right.svg'
import Phone from '../../assets/category/Phones.svg'
import SmartWatch from '../../assets/category/smart-watch.svg'
import Camera from '../../assets/category/Cameras.svg'
import Headphones from '../../assets/category/Headphones.svg'
import PC from '../../assets/category/Computers.svg'
import Gaming from '../../assets/category/Gaming.svg'
const Category = () => {
  return (
    <div className='category-continer'>
        <div className='header'>
            <span>Browse By Category</span>
            <div>
                <a href="/"><img src={LeftArrow} alt="left-arrow" /></a>
                <a href="/"><img src={RightArrow} alt="right-arrow" /></a>
            </div>
        </div>
        <div className="category-item">
            <div>
                <img src={Phone} alt="phone" />
                <span>Phones</span>
            </div>
            <div>
                <img src={SmartWatch} alt="smart-watch" />
                <span>Smart Watches</span>
            </div>
            <div>
                <img src={Camera} alt="cameras" />
                <span>Cameras</span>
            </div>
            <div>
                <img src={Headphones} alt="" />
                <span>Headphones</span>
            </div>
            <div>
                <img src={PC} alt="" />
                <span>Computers</span>
            </div>
            <div>
                <img src={Gaming} alt="" />
                <span>Gaming</span>
            </div>
        </div>
    </div>
  )
}

export default Category
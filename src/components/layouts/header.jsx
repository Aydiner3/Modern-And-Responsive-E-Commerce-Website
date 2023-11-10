import React from 'react'
import './header.scss'
import Logo from "../../assets/header/logo.svg"
import SearchIcon from "../../assets/header/Search.svg"
import Favorites from "../../assets/header/Favorites.svg"
import Cart from "../../assets/header/Cart1.svg"
import User from "../../assets/header/User.svg"
import Phones from "../../assets/header/Phones.svg"
import Computer from "../../assets/header/Computers.svg"
import Gaming from "../../assets/header/Gaming.svg"
import Camera from "../../assets/header/Cameras.svg"
import Headphones from "../../assets/header/Headphones.svg"

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='logo'>
          <a href="/"><img src={Logo} alt="Logo"/></a>
        </div>
        <div className='search-bar'>
          <input type="text" placeholder='Search'/>
          <img src={SearchIcon} alt="seact-icon"/>
        </div>
        <div className='menu'>
          <ul>
            <a href='/'><li>Home</li></a>
            <a href='/'><li>About</li></a>
            <a href='/'><li>Contact Us</li></a>
            <a href='/'><li>Blog</li></a>
          </ul>
        </div>
        <div className='icons'>
            <a href="/"><img src={Favorites} alt="favorites-icon" /></a>
            <a href="/"><img src={Cart} alt="cart-icon" /></a>
            <a href="/"><img src={User} alt="user-icon" /></a>
        </div>
    </div>
    <div className='header-category-container'>
        <a href='/'>
          <img src={Phones} alt="phone-icon" />
          <span>Phones</span>
        </a>
        <a href='/'>
          <img src={Computer} alt="computer-icon" />
          <span>Computers</span>
        </a>
        <a href='/'>
          <img src={Gaming} alt="gaming-icon" />
          <span>Smart Watches</span>
        </a>
        <a href='/'>
          <img src={Camera} alt="camera-icon" />
          <span>Cameras</span>
        </a>
        <a href='/'>
          <img src={Headphones} alt="headphones-icon" />
          <span>Headphones</span>
        </a>
        <a href='/'>
          <img src={Gaming} alt="gaming-icon" />
          <span>Gaming</span>
        </a>
    </div>
    </>
  )
}

export default Header
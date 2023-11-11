import React from 'react'
import './home.scss';
import Header from '../../components/layouts/header';
import Hero from '../../components/hero/hero';
import Products from '../../components/products/products';

const Home = () => {
  return (
    <div className='home-container'>
        <Header/>
        <Hero/>
        <Products/>
    </div>
  )
}

export default Home
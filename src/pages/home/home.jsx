import React from 'react'
import './home.scss';
import Header from '../../components/layouts/header';
import Hero from '../../components/hero/hero';
import Products from '../../components/products/products';
import Category from '../../components/category/category';
import Sale from '../../components/sale/sale';
import Banners from '../../components/banners/banners';

const Home = () => {
  return (
    <div className='home-container'>
        <Header/>
        <Hero/>
        <Products/>
        <Category/>
        <Sale/>
        <Banners/>
    </div>
  )
}

export default Home
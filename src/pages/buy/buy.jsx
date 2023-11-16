import React from 'react'
import './buy.scss'
import Header from '../../components/layouts/header';
import Footer from '../../components/layouts/footer';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import Filtersidebar from '../../components/filtersidebar/filtersidebar';
import Sale from '../../components/sale/sale'



const Buy = () => {
  return (
    <div className='buy-container'>
        <Header/>
        <Breadcrumb/>
        <div className='buy-content-container'>
          <div className='buy-sidebar'>
          <Filtersidebar/>
          </div>
          <div className='buy-content'>
          <Sale/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Buy
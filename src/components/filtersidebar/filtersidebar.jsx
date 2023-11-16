import React from 'react'
import './filtersidebar.scss'
import Dropdown from './dropdown/dropdown'
import saleData from '../../api/saleDatas'

const Filtersidebar = () => {
  const {filterData} = saleData
  return (
    <div className='filtersidebar-container'>
      <Dropdown name={"Sale"} data={filterData}/>
      <Dropdown name={"Built in Memory"} data={filterData}/>
      <Dropdown name={"Brand"} data={filterData}/>
    </div>
  )
}

export default Filtersidebar
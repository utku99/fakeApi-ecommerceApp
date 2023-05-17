import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp.jsx'
import Sorting from "../components/home/Sorting.jsx"
import Category from '../components/home/Category.jsx'
import Products from '../components/home/Products.jsx'

const Home = () => {

  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")


  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home

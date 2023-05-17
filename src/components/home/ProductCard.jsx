import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=> navigate(`products/${item.id}`)} className='w-[300px] p-2 m-2 border rounded-md relative cursor-pointer'>
        <div className='text-md font-bold absolute top-0 right-0'>{item.price} TL</div>
      <img className='w-[200px] h-[200px] m-auto' src={item.image} alt="img" />
      <div className='text-center py-2'>{item.title}</div>
    </div>
  )
}

export default ProductCard

import React from 'react'
import { removeFromCart } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({item}) => {
  const dispatch = useDispatch()

  const onclick =() =>{
    dispatch(removeFromCart(item?.id))
    window.location.reload(true);
  }

  return (
    <div className='my-5 flex items-center justify-between'>
      <img className='w-[150px] h-[150px]' src={item?.image} alt="" />
      <div className='w-[450px]'>
        <div className='text-xl '>{item?.title}</div>
        <div>{item?.description}</div>
      </div>
      <div className='font-bold text-2xl w-[150px]'>{item?.price} TL ({item?.quantity})</div>
      <div onClick={onclick} className='bg-red-500 rounded-md text-white w-[250px] h-16 flex items-center justify-center text-2xl cursor-pointer'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp

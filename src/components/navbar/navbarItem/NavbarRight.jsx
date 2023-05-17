import React, { useEffect } from 'react'
import { BiSearch } from "react-icons/bi"
import { BsFillBasketFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


const NavbarRight = () => {
    const dispatch = useDispatch()
    const { itemCount } = useSelector(state => state.carts)
    const navigate = useNavigate()



    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])


    return (
        <div className='flex items-center gap-8'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input className='bg-gray-200 outline-none' type="text" placeholder='Arama yapınız ...' />
                <BiSearch size={28} />
            </div>
            <div onClick={() => navigate("cart")} className='relative'>
                <div className='absolute -top-3 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'>{itemCount}</div>
                <BsFillBasketFill size={28} />
            </div>
        </div>
    )
}

export default NavbarRight

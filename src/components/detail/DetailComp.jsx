import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/slices/cartSlice'

const DetailComp = ({ productDetail }) => {

    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

    const decrement = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
    }
    const increment = () => {
        if (quantity <= productDetail?.rating?.count)
            setQuantity(quantity + 1)
    }
    const addBasket = () => {
        dispatch(addToCart({price: productDetail?.price, id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity}))
    }



    return (
        <div className='flex gap-10 my-10'>
            <img className='w-[600px] h-[500px]' src={productDetail.image} alt="img" />
            <div>
                <div className='text-4xl font-bold'>{productDetail.title}</div>
                <div className='my-2'>{productDetail.description}</div>
                <div className='my-2'>Rating: {productDetail?.rating?.rate}</div>
                <div className='my-2'>Count: {productDetail?.rating?.count}</div>
                <div className='text-3xl font-bold'>{productDetail.price} TL</div>
                <div className='flex items-center gap-6 my-4'>
                    <div onClick={decrement} className='text-4xl cursor-pointer'>-</div>
                    <input className='w-10 text-center text-3xl' type="text" value={quantity} />
                    <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
                </div>
                <div onClick={addBasket} className='border w-[200px] h-16 flex items-center justify-center text-2xl rounded-md bg-gray-200 cursor-pointer my-4'>Sepete Ekle</div>
            </div>
        </div>
    )
}

export default DetailComp

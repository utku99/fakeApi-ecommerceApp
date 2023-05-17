import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/slices/cartSlice'
import CartComp from '../components/cart/CartComp'

const Cart = () => {
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    console.log(carts,totalAmount,itemCount );

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])

  return (
    <div>
      {
        carts?.length > 0 ? <div>
            {
                carts?.map((item,i) => (

                      <CartComp key={i} item={item}/>
                ))
              
            }
            <div className='flex items-center justify-end text-2xl'>Toplam Tutar : <span className='font-bold text-3xl ml-1'>{totalAmount} TL</span></div>
        </div>
        : <div>Kartınız boş</div>
      }
    </div>
  )
}

export default Cart

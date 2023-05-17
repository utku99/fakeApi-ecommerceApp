import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from '../../redux/slices/categorySlice'

const Category = ({ setCategory }) => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categories)

    useEffect(() => { //sayfa yüklendiği an datayı state içine atar
        dispatch(getCategories()) //state.categories = action.payload 
    }, [dispatch])



    return (
        <div className='w-1/6 bg-gray-100 p-4 my-2 h-screen'>
            <div className='border-b pb-1 text-xl font-bold px-2'>Kategori</div>
            {
                categories?.map((item, i) => (
                    <div onClick={() => setCategory(item)} className='text-base mt-2 cursor-pointer hover:bg-gray-200 p-2' key={i}>{item}</div>
                    //filtreleme kategori isimlerine göre olacak çünkü fakestore api de url öyle
                ))
            }
        </div>
    )
}

export default Category

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/slices/productSlice'
import Loading from "../Loading.jsx"
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort }) => {

  const dispatch = useDispatch()
  const { products, productsStatus } = useSelector(state => state.products)

  useEffect(() => {
    if (category) { //categoriye göre getirme işlemi
      dispatch(getCategoryProducts(category))
    } else {
      dispatch(getProducts())
    }
  }, [dispatch, category])


  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

 
  return (
    <div>

      {
        productsStatus === "LOADING" ? <Loading /> :
          <>
            <div className='flex flex-wrap '>
              {
                currentItems?.sort((a, b) => sort === "asc" ? a.price-b.price : sort === "desc" ? b.price-a.price  : null )?.map((item, i) => (
                  <ProductCard key={i} item={item} />
                ))
              }
            </div>

            <ReactPaginate
              className="paginate"
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />

          </>
      }

    </div>
  )
}

export default Products


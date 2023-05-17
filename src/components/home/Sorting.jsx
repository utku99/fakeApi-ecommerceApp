import React from 'react'

const Sorting = ({ setSort }) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={(e) => setSort(e.target.value)} name="" id="" className='bg-white-200 py-3 px-5'>
        <option disabled>Seçiniz</option>
        <option value="asc">Artan</option>
        <option value="desc">Azalan</option>
      </select>
    </div>
  )
}

export default Sorting

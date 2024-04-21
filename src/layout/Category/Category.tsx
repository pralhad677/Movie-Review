import React from 'react'

function Category() {
  return (
    <div className='container mx-auto bg-cyan-100'>
      <div className="grid grid-cols-6 gap-x-2  ">
      <h1>Category1</h1>
      <h1 className='area1'>Category2</h1>
      <h1 className='order-5'>Category3</h1>
      <h1 className='grid place-items-center'>Category4</h1>
      <h1 className='w-1/2'>Category5</h1>
      </div>
 
    </div>
  )
}

export default Category

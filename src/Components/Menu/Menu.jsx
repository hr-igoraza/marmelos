import React from 'react'

const Menu = ({item}) => {
  return (
    <>
    <div className="flex">
{/* ====== */}
<div class="relative md:w-[280px] w-[150px] flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg ">
  <div class="relative  overflow-hidden text-white rounded-md">
    <img className='w-full' src={item.image} alt="card-image" />
  </div>
  <div class="p-4 flex justify-between ">
    <h6 class="mb-2  fs-20 font-[500] text-primary-green">
      {item.title}
    </h6>

    <h6 class="mb-2 text-slate-600 fs-18 ">
    ₹{item.price}
    </h6>
   
  </div>

</div>  

{/* ============ */}
    </div>
    
    </>
  )
}

export default Menu
import React from 'react'

const FoodItem = () => {
  return (
   <>
    <li>
            <div className="flex flex-wrap md:justify-between justify-center items-center md:border-none border-slate-200 border-b">
              <div className=" w-[200px] md:w-[500px] flex  ">
                <img
                  className="w-full"
                  src="/images/food/foodMenu/dosa.png"
                  alt="dosa"
                />
              </div>
              <div className="md:w-1/2 w-full md:p-0 p-5 ">
                <h3 className="fs-40 font-[600] text-primary-green text-center md:mb-10 mb-4 ">
                  Dosa
                </h3>
                <p className="text-[#6C757D] fs-24 md:mb-10 mb-4">
                  Dosa is a thin, crispy South Indian crepe made from fermented
                  rice and lentil batter, often served with chutney and sambar.
                </p>
                <p className="fs-40 font-poppins text-right font-[500] text-primary-green">₹273</p>
              </div>
            </div>
          </li></>
  )
}

export default FoodItem
import React from 'react'

const FoodItem = () => {
  return (
   <>
    <li>
            <div className="flex flex-wrap justify-between items-center">
              <div className=" w-full md:w-[500px] ">
                <img
                  className="w-full"
                  src="/images/food/foodMenu/dosa.png"
                  alt="dosa"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="fs-40 font-[600] text-primary-green text-center mb-10">
                  Dosa
                </h3>
                <p className="text-[#6C757D] text-[24px] mb-10">
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
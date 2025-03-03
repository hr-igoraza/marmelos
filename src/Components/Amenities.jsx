import React from 'react'

const Amenities = () => {
  return (
<>
<div className="facilites-card flex flex-wrap justify-center gap-5 mt-20 mb-10 ">
            <div className="facility bg-white md:w-[200px] w-[120px] text-center aspect-square h-[120px] md:h-fit p-2  rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/wifi.png"
                alt="wifi connectivity"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                High-Speed Wi-Fi
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2  aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/parking-area.png"
                alt="Parking Area"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Parking Area
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={50}
                src="/images/home/facilityCards/breakfast.png"
                alt="Gym and Fitness"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Breakfast
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/safety.png"
                alt="Private Workspace"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Safety & Hygiene
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
              className='md:mt-5'
                width={40}
                src="/images/home/facilityCards/taxi.png"
                alt="Other Services"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Transportation Support
              </p>
            </div>
          </div>
</>  )
}

export default Amenities
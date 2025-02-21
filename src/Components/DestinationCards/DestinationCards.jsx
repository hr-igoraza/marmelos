import React from "react";

const DestinationCards = () => {
  return (
    <>
      <div className="md:w-[400px] w-full">
        <a
          class="p-5 max-w-lg  card-shadow rounded-2xl   flex flex-col items-center"
          href="#"
        >
          <img
            src="https://loremflickr.com/800/600/girl"
            class="shadow rounded-sm overflow-hidden "
          />
          <div class="mt-8">
            <div className="flex justify-between px-1 mb-4">
              <h3 className="m-0 text-primary-green fs-20">Varkala Beach</h3>
              <span className=" font-poppins font-[600]">30km</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[16px]">
                <img
                  className="w-full"
                  src="/images/home/location.png"
                  alt=""
                />
              </div>
              <p className="text-[#8F8F8F]">Kollam, Kerala</p>
            </div>
            <p class="mt-2 fs-18 text-[#6C757D]">
              Varkala Beach is a stunning coastal spot in Kerala, famous for its
              cliffs, golden sands, and serene sunsets
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default DestinationCards;

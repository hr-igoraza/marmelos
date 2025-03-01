import React from "react";
import { Rate } from "antd";

const RoomsList = ({rooms}) => {
  return (
    <>
      <div class="flex flex-col shadow-sm md:flex-row  hover:bg-gray-100 card-shadow md:p-5 p-2 w-full my-10 rounded-[10px] ">
        <div className=" lg:w-[460px]">
        <img
          class="object-cover w-full  md:h-auto md:w-100"
          src="/images/booking/cards/room-1.png"
          alt="sample"
        />
        </div>
        <div class="flex flex-col md:px-5 w-full relative  ">
          <h5 class="mb-2 fs-30 font-[700]  text-secondary-green">
            {rooms.title}
          </h5>
          <div className="star-rating flex items-center gap-3 ">
            <p>{rooms.hotel}</p>
            <Rate disabled defaultValue={rooms.rating} />
          </div>

          <div className="rating-value flex items-center gap-2 mt-2">
            <div className="border md:p-3 p-1 rounded-[8px] border-primary-green  w-fit">
              <p className="md:text-[14px] text-[12px]">{
                rooms.ratingValue}</p>
            </div>

            <div className="reviews flex gap-2 items-center">
              <span className="fs-14 font-[700]">{rooms.impression}</span>
              <span className=" fs-12">{rooms.reviews} reviews</span>
            </div>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row justify-between md:mt-10 mt-5">
            <div className="room-facilities">
              <div className="flex flex-wrap gap-10">
                <div className="flex gap-2 ">
                  <div className="w-[25px]">
                    <img src="/images/booking/cards/check.png" alt="" />
                  </div>
                  <div className="font-400 ">High-Speed Wifi</div>
                </div>
                <div className="flex gap-2 ">
                  <div className="w-[25px]">
                    <img src="/images/booking/cards/check.png" alt="" />
                  </div>
                  <div className="font-400 ">Shower</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-10">
                <div className="flex gap-2 mt-5">
                  <div className="w-[25px]">
                    <img src="/images/booking/cards/check.png" alt="" />
                  </div>
                  <div className="font-400 ">Air-Conditioning</div>
                </div>
                <div className="flex gap-2 mt-5">
                  <div className="w-[25px]">
                    <img src="/images/booking/cards/check.png" alt="" />
                  </div>
                  <div className="font-400 ">Parking</div>
                </div>
              </div>
            </div>

            {/* =============Price */}

            <div className="price md:text-right md:mt-0 mt-5 w-fit">
              <p className="text-[12px]">starting from</p>
              <p className="fs-18 font-[700]">₹{rooms.price}/night </p>
              <p className="text-[12px]">excl. tax</p>
            </div>
          </div>
          {/* =========wish list */}
          <div className="flex my-2 relative mt-10 ">
            <button href="#" className="wishlist border border-primary-green p-3 rounded-[8px]">
            <div className=" w-[20px] object-cover  ">
              <img
                className="w-full"
                src="/images/booking/cards/heart.png"
                alt=""
              />
            </div>
            </button>

            <button className="bg-primary-green text-white p-3 rounded-[8px] ml-2 w-full ">
              Book Now
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsList;

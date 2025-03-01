import React,{useEffect} from "react";
import "./booking.css";
import { BookingWidget } from "../../Components/BookingWidget/BookingWidget";
import RoomsList from "../../Components/Booking/Rooms";
import {roomsData} from "../../Data/roomsData";


const Booking = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="booking-hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[60vh] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff]  font-[700] text-center fs-65 ">
              Comfort & Luxury Book <br /> Your Perfect Stay
            </h1>
          </div>
        </div>
      </section>

      {/* ========== booking form */}

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <BookingWidget/>
        </div>
      </section>


      <section className="list-booking container mx-auto">
        <div className="for-you flex justify-between">
            <h3 className="font-[700] text-primary-green fs-24">For You</h3>
            {/* <button 
            className=" flex items-center gap-2 border px-4 py-2 rounded-[10px]">
                <div className="w-[25px]">
                <img src="/images/booking/filter.png" alt="filter images" />  
                </div>
                <p className="fs-18 font-[600]">Filter</p>
            </button> */}
        </div>

        <div className="list md:px-10 px-2 " >
            <ul>

            {roomsData.map((rooms) => (
              <li>
              <RoomsList key={rooms.id} rooms={rooms} />
              </li>
            ))}
            </ul>
            
        </div>
      </section>
    </>
  );
};

export default Booking;

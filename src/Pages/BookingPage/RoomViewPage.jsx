import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { roomsData } from "../../Data/roomsData";
import { Rate } from "antd";
import BookingForm from "../../Components/BookingForm/BookingForm";
import Menu from "../../Components/Menu/Menu";
import { breakfastData } from "../../Data/breakfastData";
import { lunchData } from "../../Data/lunchData";
import { dinnerData } from "../../Data/dinnerData";
import Amenities from "../../Components/Amenities";

const RoomsPage = () => {


  const { id } = useParams();
  const navigate = useNavigate();
  const roomsId = parseInt(id, 10);
  const rooms = roomsData.find((item) => item.id === roomsId);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [roomsId]);

  if (!rooms) {
    return (
      <div>
        <h2>Error: No roomss Found</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  return (
    <>
      <div className="section container-full mx-auto mb-30 overflow-hidden md:h-[90vh] h-[40vh] ">
        <img
          src={rooms.image}
          className="w-full h-full object-cover object-center"
          alt={rooms.title}
        />
      </div>

      <div className="container mx-auto mb-[100px] px-3">
        <h2 className="fs-50 font-[700] mx-auto text-primary-green ">
          {rooms.title}
        </h2>

        <div className="flex justify-between mt-10 mb-5 items-center">
          <div className="flex gap-3 items-center">
            <div className="flex     gap-4">
              <div className="border md:p-3 p-1 rounded-[8px] border-primary-green  w-fit">
                <p className="md:text-[14px] text-[12px]">
                  {rooms.ratingValue}
                </p>
              </div>
              <div className="star-rating flex items-center gap-3 ">
                <Rate disabled defaultValue={rooms.rating} />
              </div>
            </div>
            <p className="text-[#6C757D] fs-24">{rooms.datePosted}</p>
          </div>
          <div className="flex gap-3">
            {/* <p className="text-[#6C757D] fs-24">{rooms.bookedFor} </p> */}
          </div>
        </div>

        <p className="fs-24 font-[400] ">{rooms.description}</p>

        <section className="container max-auto my-10">
          <h2 className="text-center fs-35 font-[700]">Amenities</h2>

          {/* <Amenities /> */}

          <div className="facilites-card flex flex-wrap justify-center gap-5 mt-20 mb-10 ">
            <div className="facility bg-white md:w-[170px] w-[120px] text-center aspect-square h-[120px] md:h-fit p-2  rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/rooms/air-conditioner.png"
                alt="wifi connectivity"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Air conditioning
              </p>
            </div>
            <div className="facility bg-white md:w-[170px] w-[120px] text-center h-[120px] md:h-fit p-2  aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/rooms/wardrobe.png"
                alt="Parking Area"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Clothing storage
              </p>
            </div>
            <div className="facility bg-white md:w-[170px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={50}
                src="/images/rooms/body-lotion.png"
                
                alt="Gym and Fitness"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Body soap
              </p>
            </div>
            <div className="facility bg-white md:w-[170px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/rooms/bedding.png"
                alt="Private Workspace"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Beddings
              </p>
            </div>
            <div className="facility bg-white md:w-[170px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                className="md:mt-5"
                width={40}
                src="/images/rooms/desk.png"
                alt="Other Services"
              />
              <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                Work Desk
              </p>
            </div>
              <div className="facility bg-white md:w-[170px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
                <img
                  className="md:mt-5"
                  width={40}
                  src="/images/rooms/lighting.png"
                  alt="Other Services"
                />
                <p className="text-[#1c1c1c] font-open-sans fs-16 font-[400] mt-5">
                  Charging Point
                </p>
              </div>
          </div>
        </section>

        {/* ================rules */}

        {/* <section className="container mx-auto my-10 ">

        {rooms.details}

          <h2 className="text-center text-primary-green fs-35  font-[700] mb-10 ">
            Property Rules
          </h2>
          <div className="md:px-10 px-2">
            <p>
              To ensure all guests have a comfortable and enjoyable stay, we
              kindly ask you to observe the following rules: Check-In/Check-Out:
              Check-in time: [Specify time] Check-out time: [Specify time]
              Reservation Policies: Cancellation and refund terms apply as per
              booking policies. Smoking Policy: Smoking is prohibited in
              non-designated areas. Pets: [Specify if pets are allowed or
              prohibited]. Noise Levels: Quiet hours: [Specify times].
              Pool/Outdoor Facilities: Use is permitted during posted hours
              only. Follow safety guidelines. Damages: Guests are responsible
              for any damages caused during their stay. Safety Compliance:
              Adhere to all posted safety and emergency procedures. Guest
              Behavior: Any disruptive behavior may result in removal from the
              property without a refund. Additional Policies: Please review your
              confirmation email for specific terms related to your booking.
            </p>
          </div>
        </section> */}

        <section className="container mx-auto my-4">
          <BookingForm />
        </section>
      </div>

      {/* <section className="container mx-auto   mt-50   ">
        <div className="breakfast">
          <h3 className="text-primary-green font-[700] fs-24">Breakfast</h3>

          <ul className="flex  gap-3 overflow-scroll scrollbar-hidden">
            {breakfastData.map((breakfast, index) => (
              <li
                key={index}
                className="text-[#1c1c1c] font-open-sans font-[400]"
              >
                <Menu item={breakfast} />
              </li>
            ))}
          </ul>
        </div>


        <div className="breakfast">
          <h3 className="text-primary-green font-[700] fs-24">Lunch</h3>

          <ul className="flex  gap-3 overflow-scroll scrollbar-hidden">
            {lunchData.map((lunch, index) => (
              <li
                key={index}
                className="text-[#1c1c1c] font-open-sans font-[400]"
              >
                <Menu item={lunch} />
              </li>
            ))}
          </ul>
        </div>


        <div className="breakfast">
          <h3 className="text-primary-green font-[700] fs-24">Dinner</h3>

          <ul className="flex  gap-3 overflow-hidden">
            {dinnerData.map((dinner, index) => (
              <li
                key={index}
                className="text-[#1c1c1c] font-open-sans font-[400]"
              >
                <Menu item={dinner} />
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default RoomsPage;

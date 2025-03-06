import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCards = ({ destination }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/destinations/${destination.id}`);
  };

  return (
    <div
      className="md:w-[400px] w-full h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="md:p-5 p-3 max-w-lg card-shadow rounded-2xl flex flex-col items-center h-full ">
        <div className="w-full overflow-hidden md:h-[240px] h-auto  object-center object-cover shadow rounded-sm ">
          <img
            src={destination.image}
            className=" w-full h-full object-cover object-center"
            alt={destination.title}
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between px-1 mb-4">
            <h3 className="m-0 text-primary-green fs-20">
              {destination.title}
            </h3>
            <span className="font-poppins font-[600]">
              {destination.distance}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[16px]">
              <img
                className="w-full"
                src="/images/home/location.png"
                alt="location"
              />
            </div>
            <p className="text-[#8F8F8F]">{destination.location}</p>
          </div>
          <p className="mt-2 fs-16 text-[#6C757D] truncate-3 ">
            {destination.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;

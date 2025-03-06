import React, { useEffect } from "react";
import DestinationCards from "../../Components/DestinationCards/DestinationCards";
import "./tourist.css";
import { destinationData } from "../../Data/destinationData";

const TouristDestination = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="tourist-hero hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[50vh] content-center"></div>
      </section>

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <h1 className="text-[#ffffff]  font-[700] text-center fs-40 ">
            Popular Destination
          </h1>
        </div>
      </section>

      <section className="destinations container mx-auto md:my-30 my-10 md:px-0 px-3">
        
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {destinationData.map((destination) => (
              <li>
                <DestinationCards
                  key={destination.id}
                  destination={destination}
                />
              </li>
            ))}
          </ul>
      
      </section>
    </>
  );
};

export default TouristDestination;

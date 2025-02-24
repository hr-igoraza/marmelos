import React from "react";
import DestinationCards from "../../Components/DestinationCards/DestinationCards";
import "./tourist.css"

const TouristDestination = () => {
  return (
    <>
      <section className="tourist-hero hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[70vh] content-center"></div>
      </section>

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <h1 className="text-[#ffffff]  font-[700] text-center fs-40 ">
          Popular Destination
          </h1>
        </div>
      </section>


<section className="destinations container mx-auto my-30">
     

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-0 px-4">
    
    <DestinationCards/>
    <DestinationCards/>
    <DestinationCards/>
    <DestinationCards/>
    <DestinationCards/>
    <DestinationCards/>
    <DestinationCards/> 
    <DestinationCards/> 
    <DestinationCards/> 
  
   
</div>

</section>

    </>
  );
};

export default TouristDestination;

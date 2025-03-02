import React from "react";
import "./home.css";
import { BookingWidget } from "../../Components/BookingWidget/BookingWidget";
import DestinationCards from "../../Components/DestinationCards/DestinationCards";
import SeeMoreBtn from "../../Components/SeeMoreBtn/SeeMoreBtn";
import { useNavigate } from "react-router-dom";
import { destinationData } from "../../Data/destinationData";

const Home = () => {

  const navigate = useNavigate();


  return (
    <>
      <section className="home-hero">
        <div className="container mx-auto flex  justify-center md:h-[130vh] h-[100vh] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff] font-red-hat font-[700] text-center fs-65 ">
            Experience an authentic kerala<br/>homestay in Marari
            </h1>
            <div className="p-4">
            <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="facilities bg-primary-green p-5 rounded-tl-[25px] rounded-tr-[25px] relative top-[-25px]">
        <div className="content-center">
          <h2 className="text-[#ffffff] font-red-hat font-[700] fs-65 text-center">
          Comforts of Home
          </h2>

          <div className="facilites-card flex flex-wrap justify-center gap-5 mt-20 ">
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
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                Parking Area
              </p>
            </div>{" "}
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/gym.png"
                alt="Gym and Fitness"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
              Breakfast
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/workspace.png"
                alt="Private Workspace"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
              Safety & Hygiene
              </p>
            </div>
            <div className="facility bg-white md:w-[200px] w-[120px] text-center h-[120px] md:h-fit p-2 aspect-square md:p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/others.png"
                alt="Other Services"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
              Transportation Support
              </p>
            </div>
          </div>
        </div>

        <div className="facitily-cards"></div>
      </section>

      {/* =========welcome */}

      <section className="welcome container mx-auto md:py-[100px] py-[50px] px-5">
        <div class="flex flex-wrap justify-between gap-10">
          <div class="w-full md:w-1/2 md:order-2 ">
            <img
              className="w-full "
              src="/images/home/welcome.png"
              alt="welcome image"
            />
          </div>
          <div class="w-full md:w-1/3 ">
            <h3 className="text-primary-green leading-[1.2em] font-red-hat font-[700] fs-65 mb-5">
              Welcome to Lorem ipsum
            </h3>

            <p className="fs-16 ">
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.
            </p>
          </div>
        </div>
      </section>

      {/* =========paradise */}

      <section className="paradise container-full  md:mb-30 mb-20 ">
        <div className="container mx-auto px-5">
          <div className="md:w-2/4 w-full flex flex-col align-center justify-center md:h-[80vh] py-10">
            <h3 className="text-white font-red-hat font-[700] fs-65 mb-5 ">
              Escape to Paradise
            </h3>

            <p className="text-white w-4/5 fs-16">
              dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam
              felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae
            </p>
          </div>
        </div>
      </section>

      {/* ===============section */}

      <section className="comfort container mx-auto flex flex-wrap mb-30 px-5">
        <div className="md:w-3/5 w-full">
          <img src="/images/home/comfort.png" alt="comfort" />
        </div>
        <div className="md:w-2/5 w-full relative ">
          <h2 className="fs-65 font-[700] leading-[1.1em] md:mt-0 mt-10 ">
            Comfort & Luxury Book Your Perfect Stay
          </h2>
          <p className="mt-5 fs-16 mb-15">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae
          </p>
          <div className="w-full mt-5 flex justify-end absolute bottom-0 right-0">
          <SeeMoreBtn onClick={()=> navigate("/booking")}/>
        </div>
        </div>
        
      </section>

      <section className="flavours container mx-auto flex flex-wrap mb-30 px-5 ">
        <div className="md:w-1/2 w-full md:order-2">
          <img src="/images/home/flavours.png" alt="Flavours" />
        </div>
        <div className="md:w-1/2 w-full md:order-1 md:pr-10 flex flex-col relative ">
        <div className="detailed">
          <h2 className="fs-65 font-[700] leading-[1.1em] md:mt-0 mt-5">
            Flavors of Kerala Authentic Cuisine at Our Resort
          </h2>
          <p className=" md:w-4/5 mt-10 mb-15 fs-16">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae
          </p >
          </div>

          <div className="w-full mt-5 absolute bottom-0 left-0 ">
          <SeeMoreBtn onClick={()=> navigate("/food")}/>
        </div>
        </div>
      </section>

      {/* ================= journerys */}

      <section className="journerys container mx-auto  mb-30 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">
          Captured Journeys
        </h2>
        {/*dummy youtube video player */}

        <div className="mt-10">
          <iframe
            className="w-full md:h-[700px] h-[30vh] "
            src="https://www.youtube.com/embed/GNTMTjo9JGk"
            title="Heritage | Kerala - World&#39;s Greatest Place"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-details">
          <p className="md:w-2/5 font-[600] mt-5 ">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor.
          </p>

          <div className="date">
            <p>October 8/10/2024</p>
          </div>
        </div>
      </section>

      {/* ================== Location */}

      <section className="location container mx-auto  mb-30 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">Our Location</h2>

        <div className="pt-10">
          <div class="mapouter ">
            <div class="gmap_canvas">
              <iframe
                className="w-full md:h-[700px] h-[30vh] "
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=thoppumpady&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                // scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://online-timer.me/"></a>
              <br />
              <a href="https://online.stopwatch-timer.net/"></a>
            </div>
          </div>
        </div>
      </section>

      {/* =================== Popular Destinations */}

      <section className="popular-destinations container mx-auto  mb-30 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">
          Popular Destinations
        </h2>
        <p className="text-center mt-4">Vacations to make your experience enjoyable in Kerala!</p>

        <div className="destination mt-10 flex flex-wrap  w-full gap-5 ">
        <DestinationCards destination={destinationData[0]} />  
        <DestinationCards destination={destinationData[0]} />  
        <DestinationCards destination={destinationData[0]} />  
     

        </div>

        <div className="w-full  flex justify-end mt-20">
          <SeeMoreBtn onClick={()=> navigate("/touristdestinations")}/>
        </div>
      </section>
    </>
  );
};

export default Home;

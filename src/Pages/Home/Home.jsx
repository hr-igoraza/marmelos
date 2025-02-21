import React from "react";
import "./home.css";
import { BookingWidget } from "../../Components/BookingWidget/BookingWidget";
import DestinationCards from "../../Components/DestinationCards/DestinationCards";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container mx-auto flex  justify-center h-[130vh] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff] font-red-hat font-[700] text-center fs-65 ">
              Where Paradise Feels Like Home
            </h1>
            <BookingWidget />
          </div>
        </div>
      </section>

      <section className="facilities bg-primary-green p-5">
        <div className="content-center">
          <h2 className="text-[#ffffff] font-red-hat font-[700] fs-65 text-center">
            We provide top facilities
          </h2>

          <div className="facilites-card flex flex-wrap justify-center gap-5 mt-20 ">
            <div className="facility bg-white w-[200px] aspect-square p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/wifi.png"
                alt="wifi connectivity"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                High-Speed Wi-Fi
              </p>
            </div>
            <div className="facility bg-white w-[200px]  aspect-square p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/parking-area.png"
                alt="Parking Area"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                Parking Area
              </p>
            </div>{" "}
            <div className="facility bg-white w-[200px] aspect-square p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/gym.png"
                alt="Gym and Fitness"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                Gym and Fitness
              </p>
            </div>
            <div className="facility bg-white w-[200px] h-[200px] p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/workspace.png"
                alt="Private Workspace"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                Private Workspace
              </p>
            </div>
            <div className="facility bg-white w-[200px]  aspect-square  p-5 rounded-[5px] flex flex-col justify-center items-center">
              <img
                width={40}
                src="/images/home/facilityCards/others.png"
                alt="Other Services"
              />
              <p className="text-[#1c1c1c] font-open-sans font-[400] mt-5">
                Other Services
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

            <p>
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

      <section className="paradise container-full   ">
        <div className="container mx-auto px-5">
          <div className="md:w-2/4 w-full flex flex-col align-center justify-center md:h-[100vh] py-10">
            <h3 className="text-white font-red-hat font-[700] fs-65 mb-5 ">
              Escape to Paradise
            </h3>

            <p className="text-white w-4/5">
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

      <section className="comfort container mx-auto flex flex-wrap my-30 px-5">
        <div className="md:w-3/5 w-full">
          <img src="/images/home/comfort.png" alt="comfort" />
        </div>
        <div className="md:w-2/5 w-full ">
          <h2 className="fs-65 font-[600] leading-[1.2em]">
            Comfort & Luxury Book Your Perfect Stay
          </h2>
          <p className="mt-5">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae
          </p>
        </div>
      </section>

      <section className="flavours container mx-auto flex flex-wrap my-30 px-5 ">
        <div className="md:w-1/2 w-full md:order-2">
          <img src="/images/home/flavours.png" alt="Flavours" />
        </div>
        <div className="md:w-1/2 w-full md:order-1 pr-10 ">
          <h2 className="fs-65 font-[600] leading-[1.2em]">
            Flavors of Kerala Authentic Cuisine at Our Resort
          </h2>
          <p className="w-4/5 mt-10">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae
          </p>
        </div>
      </section>

      {/* ================= journerys */}

      <section className="journerys container mx-auto  my-30 px-5">
        <h2 className="fs-65 font-[600] mx-auto text-center">
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
            eget dolor.{" "}
          </p>

          <div className="date">
            <p>October 8/10/2024</p>
          </div>
        </div>
      </section>

      {/* ================== Location */}

      <section className="location container mx-auto  my-30 px-5">
        <h2 className="fs-65 font-[600] mx-auto text-center">Our Location</h2>

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

      <section className="popular-destinations container mx-auto  my-30 px-5">
        <h2 className="fs-65 font-[600] mx-auto text-center">
          Popular Destinations
        </h2>
        <p className="text-center mt-4">Vacations to make your experience enjoyable in Kerala!</p>

        <div className="destination mt-10 flex flex-wrap  w-full gap-5 ">
        {/* <DestinationCards/>  
        <DestinationCards/>  
        <DestinationCards/>   */}

        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import "./home.css";
import { BookingWidget } from "../../Components/BookingWidget/BookingWidget";
import DestinationCards from "../../Components/DestinationCards/DestinationCards";
import SeeMoreBtn from "../../Components/SeeMoreBtn/SeeMoreBtn";
import { useNavigate } from "react-router-dom";
import { destinationData } from "../../Data/destinationData";
import Amenities from "../../Components/Amenities";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home-hero">
        <div className="container mx-auto flex  justify-center md:h-[130vh] h-[100vh] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff] font-red-hat font-[700] text-center fs-65 ">
              Experience an Authentic Kerala
              <br />
              Homestay in Marari
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

          <Amenities />
        </div>
      </section>

      {/* =========welcome */}

      <section className="welcome container mx-auto md:py-[100px] py-[50px] px-5">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="w-full md:w-1/2 md:order-2 ">
            <img
              className="w-full "
              src="/images/home/welcome.png"
              alt="welcome image"
            />
          </div>
          <div className="w-full md:w-1/3 ">
            <h3 className="text-primary-green leading-[1.2em] font-red-hat font-[700] fs-65 mb-5">
              Welcome to Marmelos
            </h3>

            <p className="fs-16 ">
              <strong>O</strong>ur Authentic Kerala Retreat Near Marari Beach &
              Alleppey Backwaters Nestled in the serene village of Marikulam,
              Alappuzha (Alleppey), Marmelos Homestay blends traditional Kerala
              hospitality with modern comforts. Located on the Chethy side of
              Alappuzha, just a short drive from Marari Beach and Alleppey’s
              iconic backwaters, our eco-friendly homestay offers a peaceful
              escape for travelers seeking cultural immersion or a relaxing
              nature retreat.
            </p>
            <p className="fs-16 ">
              Enjoy air-conditioned rooms, organic Kerala cuisine cooked with
              local ingredients and personalized experiences or guided tours to
              nearby fishing villages. Whether you’re a family craving quality
              time, a couple seeking romance, or a solo traveler exploring
              Kerala’s culture, our warm ambiance and lush green surroundings
              ensure an unforgettable stay.
              <br /> <br /> 📞 For bookings and inquiries,
              <br /> contact us at: +919288100118
            </p>
          </div>
        </div>
      </section>

      {/* =========paradise */}

      <section className="paradise container-full  lg:mb-30 mb-20 ">
        <div className="container mx-auto px-5">
          <div className="lg:w-2/4 w-full flex flex-col align-center justify-center md:h-[80vh] py-10">
            <h3 className="text-white font-red-hat font-[700] fs-65 mb-5 ">
              Discover Your Kerala Paradise
            </h3>

            <p className="text-white lg:w-4/5 w-full fs-16">
              Step into a world of sustainable luxury at Marmelos Homestay, your
              secluded sanctuary in Marikulam, Alappuzha, where Kerala’s vibrant
              culture meets untouched natural beauty. Located steps away from
              Marari Beach’s golden shores and a short drive from Alleppey’s
              enchanting backwaters, our homestay invites you to immerse
              yourself in Kerala’s authentic charm. Stay in elegantly designed
              villas, adventure seekers can explore kayaking trails,
              bird-watching hotspots, or traditional coir-making workshops in
              nearby villages. Ideal for honeymooners, wellness enthusiasts, and
              eco-conscious travelers, Marmelos Homestay redefines paradise with
              zero-carbon initiatives and let the rhythm of Kerala’s coastal
              life rejuvenate your soul.
            </p>
          </div>
        </div>
      </section>

      {/* ===============section */}

      <section className="comfort container mx-auto flex flex-wrap mb-30 px-5">
        <div className="lg:w-3/5 w-full">
          <img src="/images/home/comfort.png" alt="comfort" />
        </div>
        <div className="lg:w-2/5 w-full relative ">
          <h2 className="fs-65 font-[700] leading-[1.1em] lg:mt-0 mt-10 ">
            Relax in Our Elegant Private Rooms
          </h2>
          <p className="mt-5 fs-16 mb-15">
            At Marmelos Homestay, your private sanctuary in Marikulam,
            Alappuzha, awaits with thoughtfully designed rooms that blend
            Kerala’s rustic charm with modern comforts. Each spacious,
            air-conditioned room features a plush queen-sized bed dressed in
            premium cotton bedsheets and hypoallergenic pillows, ensuring a
            restful night’s sleep.Unwind in your attached bathroom, stocked with
            organic herbal soap and fresh towels, or stay connected with
            high-speed Wi-Fi as you plan your next adventure at the sleek work
            desk. Nestled just minutes from Kerala’s top attractions, Marmelos
            Homestay promises privacy, convenience, and the perfect balance of
            culture and comfort.
          </p>
          <div className="w-full mt-5 flex justify-end absolute bottom-0 right-0">
            <SeeMoreBtn onClick={() => navigate("/booking")} />
          </div>
        </div>
      </section>

      <section className="flavours container mx-auto flex flex-wrap mb-30 px-5 ">
        <div className="lg:w-1/2 w-full lg:order-2">
          <img src="/images/home/flavours.png" alt="Flavours" />
        </div>
        <div className="lg:w-1/2 w-full lg:order-1 lg:pr-10 flex flex-col relative ">
          <div className="detailed">
            <h2 className="fs-65 font-[700] leading-[1.1em] lg:mt-0 mt-5">
              Flavors of Kerala Authentic Cuisine
            </h2>
            <p className="lg:w-4/5 w-full mt-10 mb-15 fs-16">
              <strong>E</strong>xperience the true taste of Kerala at Marmelos
              Homestay, where every meal celebrates tradition and vibrant
              flavors. Our home-cooked delicacies, made with fresh local
              ingredients and spices, offer an authentic culinary adventure.
              <br /> Begin your day with comforting{" "}
              <strong>Puttu and Kadala Curry</strong> (steamed rice cakes with
              black chickpea curry) or enjoy soft, fluffy{" "}
              <strong>Appam with Stew</strong> (fermented rice pancakes with
              coconut stew). Savor the delicate{" "}
              <strong>Idiyappam with Egg Curry</strong> (rice noodles with
              spiced egg curry) and indulge in{" "}
              <strong>Malabar Parotta with Spicy Beef Curry</strong> (flaky
              layered bread with savory beef curry). Seafood lovers can enjoy{" "}
              <strong>Karimeen Pollichathu</strong> (grilled pearl spot fish),{" "}
              <strong>Meen Moilee</strong> (fish in coconut milk curry), and{" "}
              <strong>Konju Varuthathu</strong> (spiced fried prawns). <br />
              No Kerala experience is complete without the legendary{" "}
              <strong>Sadya</strong>, a vegetarian feast served on a banana
              leaf, featuring delights like <strong>Avial</strong>,{" "}
              <strong>Thoran</strong>, <strong>Pachadi</strong>, and the sweet,
              creamy goodness of <strong>Payasam</strong>. Finish your meal with
              crunchy <strong>Banana Chips</strong>, <strong>Unniyappam</strong>
              , or a cup of authentic Kerala-style tea, perfectly brewed to
              soothe your senses. Taste tradition and let Kerala’s flavors
              enchant your palate. Discover true culinary heritage.
            </p>
          </div>
          <div className="w-full mt-5 absolute bottom-0 left-0 ">
            <SeeMoreBtn onClick={() => navigate("/food")} />
          </div>
        </div>
      </section>

      {/* ================= journerys */}

      {/* <section className="journerys container mx-auto  mb-20 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">
          Captured Journeys
        </h2>

        <div className="mt-10">
          <iframe
            loading="lazy"
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
      </section> */}

      {/* ================== Location */}

      <section className="location container mx-auto  mb-20 px-5">
        <h2 className="fs-65 font-[700] mx-auto text-center">Our Location</h2>

        <div className="pt-10">
          <div className="mapouter ">
            <div className="gmap_canvas">
              <iframe

                className="w-full md:h-[700px] h-[30vh] "
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.830038105611!2d76.2997585!3d9.628710499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087d006609e939%3A0x926a631a668e7ec5!2sMarmelos%20Homestay!5e1!3m2!1sen!2sin!4v1740943773967!5m2!1sen!2sin"
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
        <p className="text-center mt-4">
          Vacations to make your experience enjoyable in Kerala!
        </p>

        <div className="destination mt-10 flex flex-wrap  w-full gap-5 mx-auto  justify-evenly">
          <DestinationCards destination={destinationData[0]} />
          <DestinationCards destination={destinationData[1]} />
          <DestinationCards destination={destinationData[2]} />
        </div>

        <div className="w-full  flex justify-end mt-20">
          <SeeMoreBtn onClick={() => navigate("/touristdestinations")} />
        </div>
      </section>
    </>
  );
};

export default Home;

import React, { useEffect } from "react";
import "./food.css";
import FoodItem from "../../Components/FoodItem/FoodItem";
import { foodData } from "../../Data/foodData";
const Food = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="food-hero">
        <div className="container mx-auto flex  justify-center md:h-[120vh] h-[60vh] content-center">
          <div className="content-center">
            <h1 className="text-[#ffffff]  font-[700] text-center fs-65 ">
              Flavors of Kerala
              <br /> Authentic Cuisine <br /> at Our Homestay
            </h1>
          </div>
        </div>
      </section>

      {/* ========= */}
      <section className="facilities bg-primary-green p-5  md:rounded-[25px] rounded-[10px]  relative top-[-25px] md:py-20">
        <div className="flex flex-wrap container mx-auto ">
          <div className="lg:w-3/4 mx-auto w-full md:px-10 ">
            <div className="border-b border-[#F9D6D6] flex justify-between items-center py-5">
              <h3 className="text-[#F9D6D6] font-[700] fs-18">BREAKFAST</h3>

              <div className="w-[35px]">
                <img src="/images/food/breakfast.png" alt="breakfast" />
              </div>
            </div>
            {/* ========== */}
            <div className="border-b border-[#F9D6D6] flex justify-between items-center py-5">
              <h3 className="text-[#F9D6D6] font-[700] fs-18">LUNCH</h3>

              <div className="w-[35px]">
                <img src="/images/food/lunch.png" alt="breakfast" />
              </div>
            </div>
            {/* ========== */}

            <div className="border-b border-[#F9D6D6] flex justify-between items-center py-5">
              <h3 className="text-[#F9D6D6] font-[700] fs-18">DINNER</h3>

              <div className="w-[35px]">
                <img src="/images/food/dinner.png" alt="dinner" />
              </div>
            </div>
            {/* ========== */}

            <div className="border-b border-[#F9D6D6] flex justify-between items-center py-5">
              <h3 className="text-[#F9D6D6] font-[700] fs-18">DESSERT</h3>

              <div className="w-[35px]">
                <img src="/images/food/dessert.png" alt="dessert" />
              </div>
            </div>
            {/* ========== */}

            <div className="border-b border-[#F9D6D6] flex justify-between items-center py-5">
              <h3 className="text-[#F9D6D6] font-[700] fs-18">QUICK BITE! </h3>

              <div className="w-[35px]">
                <img src="/images/food/bite.png" alt="Quick bite" />
              </div>
            </div>
            {/* ========== */}
          </div>
          {/* <div className="md:w-1/2 w-full relative">
            <h2 className="text-[#ffffff]  font-[700] fs-45  md:text-right text-center md:mt-0 mt-10">
              Experience the True Taste of
              <br /> Kerala’s Heritage at Our
              <br /> Resort
            </h2>

            <div className="border border-white px-3 py-1 rounded-[20px] w-fit absolute bottom-0 right-0">
              <p className="text-white fs-24 font-[700]">Explore more</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="menu container mx-auto my-20">
        <h2 className="fs-65 font-[700] text-center">Food menu</h2>

        <ul>
          {foodData.slice(0,4).map((food, index) => 
            <FoodItem item={food} index={index} />
          )}
        </ul>
      </section>

      <section className="magic container-full my-15">
        <div className="container mx-auto content-center md:h-[80vh] h-[50vh]">
          <h2 className="fs-65  text-white font-[700] md:text-right text-center">
          Experience the warmth of home-cooked meals at Marmelos Homestay
          </h2>
        </div>
      </section>

      <section className="menu container mx-auto my-20">
      <ul>
          {foodData.slice(4).map((food, index) => 
            <FoodItem item={food} index={index} />
          )}
        </ul>
      </section>

      <section className="symphony container-full my-15">
        <div className="container mx-auto content-center md:h-[90vh] h-[50vh]">
          <h2 className="fs-65  text-white font-[700] md:text-left text-center">
            Experience the Magic of Chatti Choru A Taste of Kerala!
          </h2>
        </div>
      </section>
    </>
  );
};

export default Food;

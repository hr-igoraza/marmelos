import React from "react";

const FoodItem = ({ item, index }) => {
  return (
    <>
      <li key={index}>
        <div className="flex flex-wrap md:justify-between justify-center items-center md:border-none border-slate-200 border-b">
          <div className=" w-[200px] md:w-[500px] aspect-square flex   ">
            <img className="w-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className="md:w-1/2 w-full md:p-0 p-5 ">
            <h3 className="fs-40 font-[600] text-primary-green text-center md:mb-10 mb-4 ">
              {item.title}
            </h3>
            <p className="text-[#6C757D] fs-24 md:mb-10 mb-4">
              {item.description}
            </p>
            <p className="fs-40 font-poppins text-right font-[500] text-primary-green">
              ₹{item.price}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default FoodItem;

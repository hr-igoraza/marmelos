import React from "react";

const  Form = () => {
  return (
    <>
      <form className="mx-auto bg-white p-6 rounded-lg  w-full max-w-2xl">
        <div className="grid md:grid-cols-2 md:gap-10 gap-2">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border    p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border    p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-10 gap-2 md:mt-4 mt-2">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border    p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="md:mt-4 mt-2">
          <label className="block text-gray-700 font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea className="w-full border p-2 h-40 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white font-semibold py-2 mt-4   hover:bg-green-800"
        >
          Done
        </button>
      </form>
    </>
  );
};

export default Form;

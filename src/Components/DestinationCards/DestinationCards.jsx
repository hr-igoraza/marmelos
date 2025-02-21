import React from "react";

const DestinationCards = () => {
  return (
    <>
    <div className="md:w-[400px] w-full">
      <a
        class="p-5 max-w-lg  card-shadow rounded-2xl   flex flex-col items-center"
        href="#"
      >
        <img
          src="https://loremflickr.com/800/600/girl"
          class="shadow rounded-sm overflow-hidden "
        />
        <div class="mt-8">

          <div className="flex justify-content-between">
            <h3 className="m-0">Varkala Beach</h3>
            <span>30km</span>
          </div>
          <p class="mt-2 fs-20">
            Create Exercises for any subject with the topics you and your
            students care about.
          </p>
          <div class="mt-5">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </a>
      </div>
    </>
  );
};

export default DestinationCards;

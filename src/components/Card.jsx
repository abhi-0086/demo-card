import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex max-w-[85%] mx-auto my-4 p-4 shadow-md bg-white">
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"
            alt="room"
            className="w-56 h-60 object-cover rounded-lg"
          />
        </div>
        <div className="ml-6 mt-2 flex-1 w-2/5 border-r-2 border-slate-300 pr-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl">Title goes here</h1>
              <h2 className="mb-2 text-xl">Location</h2>
            </div>
            <div className="text-2xl">♡</div>
          </div>
          <div className="mb-3">
            <p className="text-gray-600 text-md">
              Wifi + Air conditioning + Kitchen + Recycling + Non smoking +
              Vegan Friendly + Balcony + Party People
            </p>
          </div>
          <div className="flex mb-2">
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500">
              New Building
            </div>
            <div className="bg-gray-300 px-3 py-1 rounded-xl text-gray-500 ml-3">
              Lush green area
            </div>
          </div>

          <div className="flex gap-20">
            <div className="text-gray-500">
              <h2>Rent</h2>
              <h4 className="flex ">
                <span className="text-gray-700">$240</span> /month
              </h4>
            </div>
            <div className="text-gray-500">
              <h2>Accomodation</h2>
              <h4 className="text-gray-700">1 BHK</h4>
            </div>
            <div className="text-gray-500">
              <h2>Location</h2>
              <h4 className="text-gray-700">Birmingham</h4>
            </div>
            <div className="text-gray-800 text-xl pt-4">
              <div className="flex">
                <span>$240 </span>
                <p className="text-gray-500">/month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-12 flex flex-col justify-center  text-gray-700 ">
          <p>Requirement fulfill - 96%</p>
          <p>Budget save - 40%</p>
        </div>
      </div>
    </>
  );
};

export default Card;

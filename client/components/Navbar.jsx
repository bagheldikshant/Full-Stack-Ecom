import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="w-full z-[98] fixed top-0 flex items-center px-[4%] bg-white text-black h-[84px]">
      <div>
        <h1
          style={{
            fontFamily: "Mulish",
          }}
          className="text-[24px] text-[#182733] font-bold"
        >
          Products
        </h1>
      </div>
      <div
        style={{
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        }}
        className="w-[357px] h-[38px] ml-5 flex text-center items-center"
      >
        <MagnifyingGlassIcon className="text-[#9CA3AF] pl-3 h-[20px]" />
        <input
          className="h-auto w-[100%] border-0 outline-none pl-3 bg-white"
          type="text"
          placeholder="Search Anything..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center ml-auto">
        <div className="flex relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#596D7F"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <div className="rounded-[50%] w-[15px] h-[15px] absolute top-0 right-0 bg-[#DAE9FF]">
            <p className=" text-center text-[10px]">5</p>
          </div>
        </div>
        <div className="ml-3 fixed top-5 right-4 flex items-center">
          {" "}
          <div className="">
            <p className="text-[14px]  font-medium text-[#252733] pr-4 group-hover:text-gray-900">
              Tom Cook
            </p>
          </div>
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import FakeData from "./FakeData";

const CartsComponent = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-between gap-5 mt-28 text-[black] mx-[3%]">
        You are in cart
      </div>
    </>
  );
};

export default CartsComponent;

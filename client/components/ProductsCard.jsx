import React from "react";
import axios from "axios";

const ProductsCard = ({ item }) => {
  const addToCart = () => {
    axios
      .post("http://localhost:5000/addToCart", { item })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex relative flex-col rounded-lg p-2 h-[400px] w-[350px] bg-[#ffffff]">
      <div className=" flex justify-center h-[60%]">
        {" "}
        <img className="h-[100%] w-[]" src={item.image} alt="" />
      </div>
      <div className="mt-3">
        <h1 className="font-bold text-[19px] h-[30px] text-[#374151] overflow-hidden">
          {item.title}
        </h1>
      </div>
      <div className="mt-2">
        <span className="font-bold text-[19px] text-[#374151]">Price: </span>
        <span className="text-[#596D7F] text-[14px]">${item.price}</span>
      </div>
      <div>
        <button
          onClick={addToCart}
          className="bg-[#0C316A] absolute  bottom-5 left-2 rounded text-[white] w-[95%] py-[10px] px-[10px]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;

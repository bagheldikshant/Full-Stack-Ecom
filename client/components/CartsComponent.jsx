import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import FakeData from "./FakeData";

const CartsComponent = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cartItems")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [discountCode, setDiscountCode] = useState(null);
  const [btn, setBtn] = useState(false);

  const generateDiscountCode = async () => {
    setBtn(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/generateDiscountCode"
      );
      console.log(response.data);
      setDiscountCode(response.data.discountCode);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [total, setTotal] = useState(null);

  const checkout = () => {
    axios
      .post("http://localhost:5000/checkout", {
        discountCode,
      })
      .then((res) => {
        setTotal(res.data.total);
        console.log(res.data);
        alert(
          "Checkout successful! Total amount: $" +
            res.data.total +
            " Discount amount: " +
            res.data.discount
        );
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  };

  const getOrderSummary = () => {
    axios
      .get("http://localhost:5000/orderSummary")
      .then((res) => {
        alert(
          "Total Discount Amount: " +
            res.data.totalDiscountAmount +
            "  Total Purchase Amount: " +
            res.data.totalPurchaseAmount +
            "  Total Purchased Items: " +
            res.data.totalPurchasedItems
        );
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="justify-between gap-5 mt-28 text-[black] mx-[3%]">
        <div className="text-[25px] font-bold w-full mb-[3%]">Your Cart</div>
        <div className="flex flex-col space-y-3">
          {cart.map((item) => {
            return (
              <div className="flex relative items-center  rounded-lg p-2 h-auto w-full bg-[#ffffff]">
                <div className=" flex justify-center h-[60%]">
                  <img className="h-[80px] w-[100px]" src={item.image} alt="" />
                </div>

                <div className="mt-2 pl-6">
                  <div className="mt-3">
                    <h1 className="font-bold text-[19px] h-[30px] text-[#374151] overflow-hidden">
                      {item.title}
                    </h1>
                  </div>
                  <span className="font-bold text-[19px] text-[#374151]">
                    Price:{" "}
                  </span>
                  <span className="text-[#596D7F] text-[14px]">
                    ${item.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <button
              className="bg-[gray] mt-[5%] rounded text-[white] mb-[2%] w-[95%] py-[10px] px-[10px]"
              onClick={generateDiscountCode}
            >
              Check If You are Lucky{" "}
              <span className="text-sm">
                (every 2nd person gets the discount code)
              </span>
            </button>
            {btn ? (
              discountCode ? (
                <div className="text-[green] text-sm">
                  You are among the lucky One{" "}
                </div>
              ) : (
                <div className="text-[red] text-sm">
                  Sorry! You are not the lucky one to get the discount
                </div>
              )
            ) : (
              ""
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={getOrderSummary}
              className="bg-[#0C316A] mt-[5%] rounded text-[white] w-[50%] py-[10px] px-[10px]"
            >
              Get Order Summary
            </button>
            <button
              onClick={checkout}
              className="bg-[#0C316A] mt-[5%] rounded text-[white] w-[50%] py-[10px] px-[10px]"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartsComponent;

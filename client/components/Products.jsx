import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import FakeData from "./FakeData";

const Products = () => {
  const [products, setProducts] = useState(FakeData);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.get("https://fakestoreapi.com/products");
  //       console.log(result);
  //       setProducts(result.data);
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="grid grid-cols-3 justify-between gap-5 mt-28 text-[black] mx-[3%]">
        {products.map((product) => {
          return <ProductsCard item={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

import LayoutMain from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      console.log(result.data);
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 justify-between gap-5 mt-28 text-[black] mx-[3%]">
      {products.map((product) => {
        return <ProductsCard item={product} />;
      })}
    </div>
  );
};

export default Products;

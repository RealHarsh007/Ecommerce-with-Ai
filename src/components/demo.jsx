import React from "react";
import menproduct from "../data/menproduct";
import { womenProducts } from "../data/Womenproduct";
import { kidsProducts } from "../data/kidsProducts";

const Demo = ({ gender, setCategory }) => {

  const dataMap = {
    men: menproduct,
    women: womenProducts,
    kids: kidsProducts
  };

  const products = dataMap[gender] || [];

  const categories = [
    ...new Set(products.map(item => item.category))
  ];

  return (
    <div className="w-full flex justify-center mt-4 sticky top-[80px] z-40">
      <div className="flex gap-6 px-6 py-3 bg-white rounded-full shadow-md border">

        {/* ✅ ALL BUTTON */}
        <button
          onClick={() => setCategory && setCategory("all")}
          className="px-4 py-1 rounded-full bg-black text-white"
        >
          All
        </button>

        {/* ✅ Dynamic category buttons */}
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory && setCategory(item)}
            className="px-4 py-1 rounded-full hover:bg-yellow-100 capitalize"
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Demo;
import React, { useState } from "react";
import Demo from "../components/demo";
import Card from "../components/Card";
import { kidsProducts } from "../data/kidsproducts";

function Kids() {
  const [category, setCategory] = useState("all");

  // ✅ Filter logic
  const filteredData =
    category === "all"
      ? kidsProducts
      : kidsProducts.filter(
          (item) => item.category === category
        );

  return (
    <div className="bg-[#FFF7E6] min-h-screen p-6">

      {/* ✅ PASS setCategory */}
      <Demo gender="kids" setCategory={setCategory} />

      {/* ✅ PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card key={item.id} {...item} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found
          </p>
        )}
      </div>

    </div>
  );
}

export default Kids;
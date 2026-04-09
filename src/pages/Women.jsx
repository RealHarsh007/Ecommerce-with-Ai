import React, { useState } from "react";
import Demo from "../components/demo.jsx";
import Card from "../components/Card";
import { womenProducts } from "../data/Womenproduct.jsx";

function Women() {
  const [category, setCategory] = useState("all");

  // ✅ Filter logic
  const filteredData =
    category === "all"
      ? womenProducts
      : womenProducts.filter(
          (item) => item.category === category
        );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* ✅ PASS setCategory */}
      <Demo gender="women" setCategory={setCategory} />

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

export default Women;
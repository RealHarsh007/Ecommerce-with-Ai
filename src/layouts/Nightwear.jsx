import React from "react";

const Nightwear = () => {
  const categories = [
    "Nighty",
    "Sleepwear Set",
    "Satin Nightwear",
    "Cotton Nightwear",
    "Lingerie",
    "Panties",
  ];

  const products = [
  {
    name: "Silk Nighty",
    price: "₹1,499",
    category: "Nighty",
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cotton Sleepwear Set",
    price: "₹1,299",
    category: "Sleepwear Set",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Satin Nightwear",
    price: "₹2,499",
    category: "Satin Nightwear",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Soft Cotton Nightwear",
    price: "₹999",
    category: "Cotton Nightwear",
    img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elegant Lingerie Set",
    price: "₹1,799",
    category: "Lingerie",
    img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Comfort Panties Pack",
    price: "₹699",
    category: "Panties",
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=80",
  },
];

  return (
    <div className="bg-[#f8f8f8] min-h-screen px-6 py-10">

      {/* 🔥 TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Nightwear Collection 🌙</h1>
        <p className="text-gray-500 mt-2">
          Explore all styles of comfortable & stylish nightwear
        </p>
      </div>

      {/* 🔥 CATEGORY FILTER (UI only) */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white rounded-full shadow cursor-pointer hover:bg-yellow-200 transition text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* 🔥 PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* DETAILS */}
            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.price}</p>
            <p className="text-xs text-gray-400">{item.category}</p>

            {/* BUTTON */}
            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Nightwear;
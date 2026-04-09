import { useState } from "react";

function Card({ image, title, description, price }) {
  const [size, setSize] = useState("M");

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 
                    hover:shadow-2xl hover:-translate-y-2 
                    transition duration-300 border border-gray-100 group">

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-contain transition duration-500 group-hover:scale-110"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

        {/* Tag */}
        <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 rounded-full tracking-wider">
          PREMIUM
        </span>

        {/* Wishlist */}
        <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg">
          ♥
        </button>
      </div>

      {/* CONTENT */}
      <h2 className="font-semibold mt-4 text-gray-800 text-lg truncate">
        {title}
      </h2>

      <p className="text-gray-500 text-sm line-clamp-2 mt-1">
        {description}
      </p>

      {/* RATING */}
      <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
        ⭐⭐⭐⭐☆
        <span className="text-gray-400 text-xs">(120)</span>
      </div>

      {/* PRICE */}
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-red-600 font-bold text-lg">₹{price}</p>
          <p className="text-gray-400 text-xs line-through">₹{price + 500}</p>
        </div>

        {/* Sizes */}
        <div className="flex gap-1 text-[11px]">
          {["S", "M", "L"].map((s) => (
            <span
              key={s}
              onClick={() => setSize(s)}
              className={`px-2 py-1 border rounded cursor-pointer transition
                ${size === s 
                  ? "bg-black text-white" 
                  : "text-gray-500 hover:bg-gray-100"}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-2 mt-4">
        <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg w-full text-sm transition">
          Add to Cart
        </button>

        <button className="bg-black text-white px-3 py-2 rounded-lg w-full text-sm 
                           hover:bg-red-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
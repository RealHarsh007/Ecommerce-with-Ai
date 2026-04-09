import React from "react";
// import mon from "../assets/model-1.png";
// import woemn from "../assets/model-2.png";
export default function CollectionBanner() {
  return (
    <section className="px-10 py-14 bg-[#f4f4f4]">
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT BANNER */}
        <div className="bg-gradient-to-r from-[#f1e3d3] to-[#f6f6f6] rounded-2xl p-6 flex items-center justify-between shadow-md">
          <div>
            <p className="text-gray-500">TRENDING</p>
            <h2 className="text-2xl font-bold mb-3">
              WOMEN'S COLLECTION
            </h2>

            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Discover Now
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            className="w-32 rounded-xl"
            alt=""
          />
        </div>

        {/* RIGHT BANNER */}
        <div className="bg-gradient-to-r from-[#f6f6f6] to-[#f1e3d3] rounded-2xl p-6 flex items-center justify-between shadow-md">
          <div>
            <p className="text-orange-500">LIMITED TIME</p>
            <h2 className="text-2xl font-bold mb-2">
              SAVE 30%
            </h2>
            <p className="text-gray-500 mb-3">
              ON MEN’S JACKETS
            </p>

            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Shop Now
            </button>
          </div>

          <img
            src="model-2.png"
            className="w-32 rounded-xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
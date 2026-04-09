import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/CollectionBanner";
import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale, FaChild, FaGem } from "react-icons/fa";

import ban1 from "../assets/banners/ban1.png";
import ban2 from "../assets/banners/ban2.png";
import ban3 from "../assets/banners/ban3.png";

function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  const banners = [
    { img: ban1, title: "New Season Arrivals", subtitle: "Discover latest trends", path: "/collections" },
    { img: ban2, title: "Mega Sale", subtitle: "Up to 50% off", path: "/sale" },
    { img: ban3, title: "Premium Collection", subtitle: "Luxury fashion", path: "/collections" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f6f7f9]">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 CATEGORY */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Men",
              path: "/men",
              icon: <FaMale />,
              bg: "from-blue-100 to-blue-200",
            },
            {
              name: "Women",
              path: "/women",
              icon: <FaFemale />,
              bg: "from-pink-100 to-pink-200",
            },
            {
              name: "Kids",
              path: "/kids",
              icon: <FaChild />,
              bg: "from-green-100 to-green-200",
            },
            {
              name: "Accessories",
              path: "/collections",
              icon: <FaGem />,
              bg: "from-yellow-100 to-orange-200",
            },
          ].map((item, i) => (

            <div
              key={i}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer rounded-2xl p-6 h-[130px] flex flex-col items-center justify-center
              bg-gradient-to-br ${item.bg}
              backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300`}
            >
              <div className="text-3xl mb-2 text-gray-700">
                {item.icon}
              </div>

              <h3 className="text-lg font-medium text-gray-800">
                {item.name}
              </h3>
            </div>

          ))}
        </div>
      </div>

      {/* 🔥 CAROUSEL */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div
          className="relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          onClick={() => navigate(banners[slide].path)}
        >
          <img
            src={banners[slide].img}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <h2 className="text-2xl md:text-4xl font-semibold">
              {banners[slide].title}
            </h2>
            <p className="mt-1 text-sm md:text-base">
              {banners[slide].subtitle}
            </p>

            <button className="mt-4 w-fit bg-white/90 text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-white transition">
              Shop Now →
            </button>
          </div>

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSlide(i);
                }}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  i === slide ? "bg-white" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 COLLECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <Banner />
      </div>

      {/* 🔥 PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 mt-14 pb-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Trending Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="h-40 bg-gray-200/70 rounded-lg mb-4"></div>
              <h3 className="font-medium text-gray-800">
                Product {item}
              </h3>
              <p className="text-gray-500 text-sm">₹999</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
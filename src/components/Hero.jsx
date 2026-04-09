import { useState, useEffect } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";

import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";

const slides = [
  {
    title: "MEN FASHION",
    subtitle: "COLLECTION",
    img: model1,
    color:
      "bg-gradient-to-r from-[#f1e3d3] via-[#ffffff] to-[#f8f8f8]",
  },
  {
    title: "WOMEN STYLE",
    subtitle: "NEW ARRIVALS",
    img: model2,
    color:
      "bg-gradient-to-r from-[#ffe0e9] via-[#ffffff] to-[#f8f8f8]",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">

      <AnimatePresence mode="wait">
        <_motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          className={`min-h-[90vh] flex items-center transition-all duration-700 ${slides[index].color}`}
        >
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            {/* 🔥 LEFT */}
            <div>
              <_motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-extrabold text-gray-900"
              >
                {slides[index].title}
              </_motion.h1>

              <_motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-light mt-2 text-gray-500"
              >
                {slides[index].subtitle}
              </_motion.h2>

              {/* 🎯 CTA + SALE */}
              <div className="mt-10 flex items-center gap-8">

                {/* 💎 BIG SALE CIRCLE */}
                <_motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-40 h-40 rounded-full border-[6px] border-orange-400 flex flex-col items-center justify-center bg-white shadow-xl hover:scale-110 transition"
                >
                  <span className="text-lg text-gray-500">Get</span>
                  <span className="text-3xl font-bold">35%</span>
                  <span className="text-orange-500 font-semibold text-lg">OFF</span>
                </_motion.div>

                {/* 🚀 BUTTON */}
                <_motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-7 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition"
                >
                  SHOP NOW →
                </_motion.button>

              </div>
            </div>

            {/* 🖼️ RIGHT */}
            <div className="relative flex justify-center items-center">

              {/* 💡 GLOW */}
              <div className="absolute w-[420px] h-[420px] bg-orange-200 blur-3xl opacity-60 rounded-full"></div>

              {/* 🔶 FLOATING */}
              <_motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-16 right-10 w-14 h-14 bg-gray-800 rounded-lg opacity-80"
              ></_motion.div>

              <_motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-32 right-32 w-12 h-12 bg-orange-400 rounded-lg opacity-80"
              ></_motion.div>

              {/* 🧊 GLASS CARD */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 w-32 h-40 bg-white/60 backdrop-blur-xl shadow-2xl rounded-xl border border-white/40"></div>

              {/* 🖼️ MODEL */}
              <_motion.img
                key={slides[index].img}
                src={slides[index].img}
                alt="model"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="h-[520px] object-contain z-10 drop-shadow-2xl"
              />

            </div>

          </div>
        </_motion.div>
      </AnimatePresence>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-black scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
}

export default Hero;
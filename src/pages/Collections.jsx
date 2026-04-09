import { useNavigate } from "react-router-dom";

function Collection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Bride Collection 👰",
      desc: "Lehenga, Bridal Gowns, Sarees",
      path: "/bride",
      img: "https://images.unsplash.com/photo-1610186593977-82a2b0b8c77d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Groom Collection 🤵",
      desc: "Sherwani, Suits, Wedding Wear",
      path: "/groom",
      img: "https://images.unsplash.com/photo-1593032465171-8c9b8c9f3b5b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Party Wear 🎉",
      desc: "Outfits for parties & events",
      path: "/party",
      img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Beachwear 🌊",
      desc: "Swimwear, resort outfits",
      path: "/beachwear",
      img: "https://images.unsplash.com/photo-1503342452485-86ff0a3c8e06?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Nightwear 🌙",
      desc: "Comfortable & stylish night outfits",
      path: "/nightwear",   // ✅ IMPORTANT
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Designer Collection ✨",
      desc: "Celebrity & luxury fashion",
      path: "/designer",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-[#f8f8f8] min-h-screen px-6 py-10">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Luxury Collections 👑</h1>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {categories.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)}   // ✅ FIXED
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Collection;
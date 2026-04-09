function ProductCard({ img, name, price }) {
  return (
    <div className="border p-4 rounded-xl shadow-md hover:shadow-xl transition">
      
      <img
        src={img}
        alt="product"
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">{name}</h2>

      <p className="text-gray-600">{price}</p>

      <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
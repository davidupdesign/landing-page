import { productData } from "../data";

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {productData.name}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-600">
            {productData.tagline}
          </p>
          <p className="mt-6 text-lg text-gray-500 max-w-xl">
            {productData.description}
          </p>
          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition">
            Buy Now - ${productData.price}
          </button>
        </div>
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-6xl">
            🎧
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

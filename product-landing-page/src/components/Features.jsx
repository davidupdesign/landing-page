import { features } from "../data";

function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Premium Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail engineered for the ultimate listening experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              key={item.id}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

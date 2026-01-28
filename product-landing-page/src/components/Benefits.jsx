import { benefits } from "../data";

function Benefits() {
  const emojis = ["💼", "✈️", "🎵"];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose SoundPro X1?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transform how you experience sound in every moment.
          </p>
        </div>
        <div className="space-y-16">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 bg-gray-100 rounded-3xl aspect-video flex items-center justify-center text-6xl">
                {emojis[index]}
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;

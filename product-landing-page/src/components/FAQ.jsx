import { faqs } from "../data";
import { useState } from "react";

function FAQ() {
  const [openIds, setOpenIds] = useState([]);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">FAQs</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about SoundPro X1.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          {faqs.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <div>
                <button
                  onClick={() => {
                    if (openIds.includes(item.id)) {
                      // ID is already in array, so remove it
                      setOpenIds(openIds.filter((id) => id !== item.id));
                    } else {
                      // ID is not in array, so add it
                      setOpenIds([...openIds, item.id]);
                    }
                  }}
                  className="w-full py-6 flex justify-between items-center text-left text-lg font-medium text-gray-900 cursor-pointer"
                >
                  {item.question}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openIds.includes(item.id) ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIds.includes(item.id) ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

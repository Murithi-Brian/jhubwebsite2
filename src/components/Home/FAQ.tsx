import { useState, useEffect } from "react";

const faqs = [
  {
    id: 1,
    question: "Q: What is JHUB?",
    answer:
      "A: JHUB is an Innovation Hub dedicated to fostering digital transformation and innovation. We provide a collaborative space for visionaries, entrepreneurs, and businesses to ideate, incubate, and implement digital solutions.",
  },
  {
    id: 5,
    question: "Q: Who are JHUB's notable partners?",
    answer:
      "A: JHUB collaborates with a consortium formed by Jomo Kenyatta University of Agriculture (JKUAT) and other partners. This consortium aims to create a Digital Innovation Hub supporting smallholder farmers and MSEs with climate-smart agriculture, health, and other tech/smart solutions.",
  },
  {
    id: 2,
    question: "Q: What services does JHUB offer?",
    answer:
      "A: JHUB offers a comprehensive array of digital solutions, including support for finding investments, climate-smart agricultural solutions, digital trade, skills development programs, technology transfer facilitation, and more. Our services are tailored to meet the dynamic needs of the digital era.",
  },
  {
    id: 3,
    question: "Q: Who can benefit from JHUB's services?",
    answer:
      "A: JHUB is designed to benefit individuals, entrepreneurs, small-scale farmers, traders, and enterprises seeking to thrive in the digital landscape. Our inclusive approach ensures that everyone, from various sectors, can find support for their digital initiatives.",
  },
  {
    id: 4,
    question: "Q: How does JHUB support investments?",
    answer:
      "A: Our team of financial experts and advisors at JHUB provides dedicated support to help you find the right investments for your digital initiatives. Whether you're a small-scale farmer or a large enterprise, we guide you through the process, connecting you with opportunities aligned with your goals.",
  },
  {
    id: 6,
    question: "Q: How does JHUB facilitate technology transfer?",
    answer:
      "A: JHUB acts as a catalyst for technology transfer by connecting innovators, industry experts, and businesses. We foster collaborations that lead to the swift and effective transfer of technology, breaking down barriers to empower individuals and organizations.",
  },
];

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!openAccordion || openAccordion === target.id) return;
      setOpenAccordion(null);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [openAccordion]);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`hs-accordion pt-6 pb-3 ${
                  openAccordion === faq.id ? "active" : ""
                }`}
                id={`hs-basic-with-title-and-arrow-stretched-heading-${faq.id}`}
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === faq.id ? null : faq.id)
                  }
                  className="hs-accordion-toggle dark:text-bodydark group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${faq.id}`}
                >
                  {faq.question}
                  <svg
                    className={`hs-accordion-active:${
                      openAccordion === faq.id ? "block" : "hidden"
                    } flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${faq.id}`}
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden max-h-0 ${
                    openAccordion === faq.id ? "block max-h-[500px]" : "hidden"
                  } w-full overflow-hidden transition-height duration-300`} // Use transition-height instead of transition-[height]
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${faq.id}`}
                >
                  <p className="text-gray-600 dark:text-bodydark">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

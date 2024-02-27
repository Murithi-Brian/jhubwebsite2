import { Disclosure } from "@headlessui/react";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqs = [
  {
    id: 1,
    question: "What is JHUB?",
    answer:
      "JHUB is an Innovation Hub dedicated to fostering digital transformation and innovation. We provide a collaborative space for visionaries, entrepreneurs, and businesses to ideate, incubate, and implement digital solutions.",
  },
  {
    id: 5,
    question: "Who are JHUB's notable partners?",
    answer:
      "JHUB collaborates with a consortium formed by Jomo Kenyatta University of Agriculture (JKUAT) and other partners. This consortium aims to create a Digital Innovation Hub supporting smallholder farmers and MSEs with climate-smart agriculture, health, and other tech/smart solutions.",
  },
  {
    id: 2,
    question: "What services does JHUB offer?",
    answer:
      "JHUB offers a comprehensive array of digital solutions, including support for finding investments, climate-smart agricultural solutions, digital trade, skills development programs, technology transfer facilitation, and more. Our services are tailored to meet the dynamic needs of the digital era.",
  },
  {
    id: 3,
    question: "Who can benefit from JHUB's services?",
    answer:
      "JHUB is designed to benefit individuals, entrepreneurs, small-scale farmers, traders, and enterprises seeking to thrive in the digital landscape. Our inclusive approach ensures that everyone, from various sectors, can find support for their digital initiatives.",
  },
  {
    id: 4,
    question: "How does JHUB support investments?",
    answer:
      "Our team of financial experts and advisors at JHUB provides dedicated support to help you find the right investments for your digital initiatives. Whether you're a small-scale farmer or a large enterprise, we guide you through the process, connecting you with opportunities aligned with your goals.",
  },
  {
    id: 6,
    question: "How does JHUB facilitate technology transfer?",
    answer:
      "JHUB acts as a catalyst for technology transfer by connecting innovators, industry experts, and businesses. We foster collaborations that lead to the swift and effective transfer of technology, breaking down barriers to empower individuals and organizations.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Frequently asked questions
        </h2>
        <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
          Everything you need to know about JHUB
        </p>
      </div>

      <div className="w-full sm:px-4 pt-8">
        <div className="mx-auto w-full max-w-6xl">
          {faqs.map(({ question, answer }) => {
            return (
              <Disclosure key={crypto.randomUUID()}>
                {({ open }) => (
                  <div className="my-1 py-5 border-b border-[#CACCCD]">
                    <Disclosure.Button className="flex w-full h-full justify-between items-center text-sm sm:text-base rounded-lg bg-orange-300 px-4 py-2 text-left font-medium text-black hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-red/75">
                      <p>{question}</p>
                      <span>
                        {open ? (
                          <IconMinus className="h-5 w-5 text-neutral-red" />
                        ) : (
                          <IconPlus className="h-5 w-5 text-neutral-red" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 bg-pale-orange text-light-grey">
                      {answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
}

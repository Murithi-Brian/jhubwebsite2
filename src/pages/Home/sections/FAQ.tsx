import { Disclosure } from "@headlessui/react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { PartnershipLogos } from "./HeroSection";

const faqs = [
  {
    id: 1,
    question: "What is JHUB?",
    answer:
      "JHUB is an Innovation Hub dedicated to fostering digital transformation and innovation...",
  },
  {
    id: 5,
    question: "Who are JHUB's notable partners?",
    answer:
      "JHUB collaborates with a consortium formed by Jomo Kenyatta University of Agriculture (JKUAT)...",
  },
  // Other FAQs...
];

export default function FAQ() {
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
          Everything you need to know about JHUB
        </p>
      </div>

      <div className="w-full sm:px-4 pt-8">
        <div className="mx-auto w-full max-w-6xl">
          {faqs.map(({ id, question, answer }) => (
            <Disclosure key={id}>
              {({ open }) => (
                <div className="my-1 py-5 border-b border-[#CACCCD]">
                  <Disclosure.Button className="flex w-full justify-between items-center text-sm sm:text-base rounded-lg bg-orange-300 px-4 py-2 text-left font-medium text-black hover:bg-orange-200 focus:outline-none">
                    <p>{question}</p>
                    <span>
                      {open ? (
                        <IconMinus className="h-5 w-5 text-neutral-red" />
                      ) : (
                        <IconPlus className="h-5 w-5 text-neutral-red" />
                      )}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className="px-4 pb-2 pt-4 bg-pale-orange text-light-grey transition duration-300 ease-in-out"
                  >
                    {answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      <div className="my-20 flex items-center justify-center">
        <h2 className="text-title-md">Our Partners</h2>
        
        
      </div>
      <div>
      <PartnershipLogos />
      </div>
    </div>
  );
}

import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is JHUB?',
      answer:
        'JHUB is an Innovation Hub dedicated to fostering digital transformation and innovation. We provide a collaborative space for visionaries, entrepreneurs, and businesses to ideate, incubate, and implement digital solutions.',
    },
    {
      question: 'Who are JHUB\'s notable partners?',
      answer:
        'JHUB collaborates with a consortium formed by Jomo Kenyatta University of Agriculture (JKUAT) and other partners. This consortium aims to create a Digital Innovation Hub supporting smallholder farmers and MSEs with climate-smart agriculture, health, and other tech/smart solutions.',
    },
    {
      question: 'What services does JHUB offer?',
      answer:
        'JHUB offers a comprehensive array of digital solutions, including support for finding investments, climate-smart agricultural solutions, digital trade, skills development programs, technology transfer facilitation, and more. Our services are tailored to meet the dynamic needs of the digital era.',
    },
    {
      question: 'Who can benefit from JHUB\'s services?',
      answer:
        'JHUB is designed to benefit individuals, entrepreneurs, small-scale farmers, traders, and enterprises seeking to thrive in the digital landscape. Our inclusive approach ensures that everyone, from various sectors, can find support for their digital initiatives.',
    },
    {
      question: 'How does JHUB support investments?',
      answer:
        'Our team of financial experts and advisors at JHUB provides dedicated support to help you find the right investments for your digital initiatives. Whether you\'re a small-scale farmer or a large enterprise, we guide you through the process, connecting you with opportunities aligned with your goals.',
    },
    {
      question: 'How does JHUB facilitate technology transfer?',
      answer:
        'JHUB acts as a catalyst for technology transfer by connecting innovators, industry experts, and businesses. We foster collaborations that lead to the swift and effective transfer of technology, breaking down barriers to empower individuals and organizations.',
    },
  ];

  return (
    <section className="faq-section py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Accordion key={index} className="faq-item" elevation={3}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                <Typography className="text-lg font-semibold text-gray-800">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-gray-600">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

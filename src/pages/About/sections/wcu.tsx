import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled-components for custom styling
const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: #ffffff; /* Custom background */
  border-radius: 12px; /* Rounded corners */
  padding: 2rem; /* Custom padding */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 350px;
  margin: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #3f9f5c; /* Custom green */
  margin-bottom: 1rem;
  font-size: 1.75rem; /* Custom size */
`;

const FeatureDescription = styled.p`
  color: #4a4a4a; /* Custom gray */
  font-size: 1rem; /* Custom size */
`;

// Main React component
const WCU = () => {
  return (
    <div className="bg-[#F4F2F3] text-black px-4 py-16 md:px-16 lg:px-32">
      {/* Section Header with Bounce-in Animation */}
      <SectionHeader
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-extrabold text-green-600">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Join us on a journey where innovation, sustainability, and community converge to create lasting impact.
        </p>
      </SectionHeader>

      {/* Main Content with Staggered Bounce-in Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {/* Array of features */}
        {[
          {
            title: 'Innovative Solutions',
            description: 'We develop climate-smart agricultural solutions and digital trade models to empower communities across Africa.',
            delay: 0.3,
          },
          {
            title: 'Empowering Entrepreneurs',
            description: 'We provide comprehensive support, mentorship, and resources for digital entrepreneurs to transform ideas into thriving businesses.',
            delay: 0.6,
          },
          {
            title: 'Academia-Industry Collaboration',
            description: 'We bridge the gap between universities and industries, providing pathways for digital innovators to enter the workforce.',
            delay: 0.9,
          },
          {
            title: 'Driving Market Adoption',
            description: 'We work closely with industry leaders to ensure our innovations are market-ready and widely adopted.',
            delay: 1.2,
          },
          {
            title: 'Diversity & Inclusion',
            description: 'We create an inclusive environment where diverse perspectives are valued, ensuring equal opportunities for all.',
            delay: 1.5,
          },
          {
            title: 'Fostering Creativity',
            description: 'Our ecosystem encourages cross-disciplinary innovation, bringing together experts to create impactful solutions.',
            delay: 1.8,
          },
        ].map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120, delay: feature.delay }}
          >
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </motion.div>

      {/* Call to Action with Hover Effect */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        {/* Add your call to action here */}
      </motion.div>
    </div>
  );
};

export default WCU;

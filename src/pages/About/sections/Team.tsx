import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import icons

// Import team member images
import lawrenceImg from '../../../assets/images/team/lawrence-nderu.jpg';
import rehemaImg from '../../../assets/images/team/rehema-ndeda.png';
import mwangiImg from '../../../assets/images/team/mwangi-karanja.jpeg';
import williamImg from '../../../assets/images/team/will-muriithi.png';
import daisyImg from '../../../assets/images/team/ondwari-daisy.jpg';
import ireneImg from '../../../assets/images/team/irene-kimani.png';
import johnImg from '../../../assets/images/team/john-kinyuru.jpg';

export default function Team() {
  const TeamMembers = [
    {
      name: 'Dr. Lawrence Nderu',
      img: lawrenceImg,
      designation: 'Project Lead | Chairman | AI/ML & Software Engineering Expert',
      github: 'https://github.com/username',
      web: 'https://example.com',
      lin: 'https://linkedin.com/in/username',
      bio: 'Dr. Lawrence is a leading expert in AI and Machine Learning, with over 10 years of experience in software engineering.',
    },
    {
      name: 'Dr. Rehema Ndeda',
      img: rehemaImg,
      designation: 'Climate Smart Agriculture/Automation Lead | Mechatronics Engineer',
      lin: 'https://linkedin.com/in/username',
      bio: 'Dr. Rehema is passionate about integrating technology with sustainable agriculture to improve food security.',
    },
    {
      name: 'Dr. Mwangi Karanja',
      img: mwangiImg,
      designation: 'Innovative Technology and Data Science Lead | Expert in Technology Diffusion',
      lin: 'https://linkedin.com/in/username',
      bio: 'Dr. Mwangi focuses on the intersection of data science and emerging technologies, driving innovation across industries.',
    },
    {
      name: 'Dr. William Murithi',
      img: williamImg,
      designation: 'DIH Business Development/Strategy Lead | Business Model Innovation Expert',
      github: 'https://github.com/username',
      lin: 'https://linkedin.com/in/username',
      bio: 'Dr. William has extensive experience in developing and implementing successful business strategies in emerging markets.',
    },
    {
      name: 'Ms. Daisy Ondwari',
      img: daisyImg,
      designation: 'Product Development Fellow | Customer Advocate',
      lin: 'https://linkedin.com/in/username',
      bio: 'Ms. Daisy focuses on enhancing customer experiences and developing innovative product solutions.',
    },
    {
      name: 'Irene Kimani',
      img: ireneImg,
      designation: 'ICT Specialist & Data Manager, KALRO | Expert in Data Science and AI',
      lin: 'https://linkedin.com/in/username',
      bio: 'Irene is dedicated to harnessing the power of data to drive decision-making in agricultural science and innovation.',
    },
    {
      name: 'Dr. John Kinyuru',
      img: johnImg,
      designation: 'Research & Innovation Development Lead | Food & Nutrition Scientist',
      lin: 'https://linkedin.com/in/username',
      bio: 'Dr. John’s research focuses on food security and nutrition, aiming to improve health outcomes through innovation.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Meet The Team</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover group-hover:opacity-80"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
                <p className="text-gray-500 mb-4">{member.bio}</p>
                <div className="flex space-x-4 mt-4">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-1000 p-2 rounded-full bg-blue-600 hover:bg-gray-300 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.lin && (
                    <a
                      href={member.lin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-1000 p-2 rounded-full bg-blue-600 hover:bg-gray-300 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.web && (
                    <a
                      href={member.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-1000 p-2 rounded-full bg-blue-600 hover:bg-gray-300 transition-colors"
                    >
                      <FaGlobe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

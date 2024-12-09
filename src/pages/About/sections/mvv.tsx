import React from 'react';

const MVV = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #00274d, white)',
        color: 'white',
        padding: '2rem 1rem', // Equivalent to Tailwind's px-4 py-8
        paddingLeft: '4rem', // Equivalent to Tailwind's md:px-16
        paddingRight: '4rem',
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#38A169' }}>
          Our Mission, Vision & Values
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#D1D5DB', marginTop: '1rem' }}>
          Empowering progress through innovation and collaboration.
        </p>
      </div>

      {/* Mission Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#60A5FA', marginBottom: '1rem' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#D1D5DB' }}>
          Our mission is to create innovative solutions that positively impact our community, fostering growth, sustainability, and inclusivity through cutting-edge technologies and collaborations.
        </p>
      </div>

      {/* Vision Section */}
      <div style={{ marginBottom: '3rem', backgroundColor: '#D1FAE5', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#10B981', marginBottom: '1rem' }}>
          Our Vision
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#1F2937' }}>
          We envision a world where technology serves as a catalyst for solving real-world problems, enabling individuals and organizations to thrive in an interconnected, sustainable, and equitable future.
        </p>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1D4ED8', marginBottom: '1rem' }}>
          Our Values
        </h2>
        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '0', fontSize: '1.125rem', color: '#1F2937' }}>
          {['Innovation', 'Integrity', 'Collaboration', 'Sustainability'].map((value, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'start', marginBottom: '1rem' }}>
              <span style={{ color: '#10B981', marginRight: '0.75rem' }}>✔</span>
              {value}: {index === 0 ? 'Continuously pushing the boundaries of what\'s possible to create impactful solutions.' : index === 1 ? 'Conducting all our activities with the utmost honesty, transparency, and respect.' : index === 2 ? 'Building strong relationships with partners, stakeholders, and communities to achieve shared goals.' : 'Committing to long-term positive impacts for the environment and society.'}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="/contact"
          style={{
            backgroundColor: '#1D4ED8',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLAnchorElement; // Type assertion
            target.style.backgroundColor = '#B91C1C';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLAnchorElement; // Type assertion
            target.style.backgroundColor = '#1D4ED8';
          }}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default MVV;

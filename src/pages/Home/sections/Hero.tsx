import React from 'react';
import styled from 'styled-components';
import styles from './hero.module.css';
import heroimg from '../../../assets/home/hero image.jpg'; // Adjust path as necessary

// Styled Components
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: white;
  padding: 0 1rem; /* Default padding */
  
  @media (min-width: 768px) {
    padding: 0 2rem; /* Adjust for medium screens */
  }
`;

const Heading = styled.h1`
  color: white;
  margin-bottom: 1.5rem; 
  font-size: 1rem; 
  font-weight: 800;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
  background: linear-gradient(to right, #0d9488, #22d3ee, #3b82f6);
  -webkit-background-clip: text;
  color: transparent; /* Use gradient as text color */
  
  @media (min-width: 1024px) {
    font-size: 8rem; 
  }
`;

const Paragraph = styled.p`
  padding: 0;
  margin-bottom: 1.5rem; /* Adjust for spacing */
  font-size: 1rem; /* Base font size */
  
  @media (min-width: 768px) {
    font-size: 1.25rem; /* Adjust for medium screens */
  }
  
  @media (min-width: 1024px) {
    padding: 0 8rem; /* Adjust for larger screens */
  }
`;

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-cover bg-center">
      {/* Background Image */}
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${heroimg})` }}
      ></div>

      {/* Gray Translucent Layer */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <ContentWrapper>
        <div>
          <Heading>
            Discover. <br />
            <span>Create with JHUB</span>
          </Heading>
          <Paragraph>
            Uniting creativity and technology to empower communities. We build solutions to drive societal progress.
          </Paragraph>
        </div>
      </ContentWrapper>

      {/* Wave Animation */}
      <div className={styles.waveWrapper}>
        <div className={`${styles.waveWrapperInner} ${styles.bgTop}`}>
          <div className={`${styles.wave} ${styles.waveTop}`}></div>
        </div>
        <div className={`${styles.waveWrapperInner} ${styles.bgMiddle}`}>
          <div className={`${styles.wave} ${styles.waveMiddle}`}></div>
        </div>
        <div className={`${styles.waveWrapperInner} ${styles.bgBottom}`}>
          <div className={`${styles.wave} ${styles.waveBottom}`}></div>
        </div>
      </div>
    </section>
  );
}

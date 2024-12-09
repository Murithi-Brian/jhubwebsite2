import React from 'react';
import { Helmet } from 'react-helmet';
//import Navbar from '../../components/common/NavBar';
import Hero from '../../pages/Home/sections/Hero';
import ServicesSection from '../../pages/Home/sections/service';
import Stats from '../../pages/Home/sections/Stats';
import LLT from '../../pages/Home/sections/LLT';
import CTA from '../../pages/Home/sections/CTA';
//import Footer from '../../components/common/Footer';
import CustomLoader from '../../components/common/CustomLoader';

interface HomeState {
  githubStats: any;
  loading: boolean;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      githubStats: null,
      loading: false, // You can adjust loading based on your logic
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>JHUB AFRICA</title>
        </Helmet>
        {/* Uncomment Navbar and Footer as needed */}
        {/* <Navbar /> */}
        <Hero />
        <ServicesSection />
        <Stats githubStats={this.state.githubStats} />
        <LLT />
        <CTA />
        {this.state.loading && <CustomLoader />}
      </>
    );
  }
}

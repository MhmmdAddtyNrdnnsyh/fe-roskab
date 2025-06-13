import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Agenda from '../components/Agenda';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';
import LatestNews from '../components/LatestNews';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <LatestNews />
      <About />
      <Agenda />
      <Gallery />
      <CallToAction />
    </div>
  );
};

export default HomePage; 
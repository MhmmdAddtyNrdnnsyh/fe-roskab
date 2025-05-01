import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Agenda from '../components/Agenda';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Agenda />
      <Gallery />
      <CallToAction />
    </div>
  );
};

export default HomePage; 
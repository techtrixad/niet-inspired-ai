
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Programs from '@/components/Programs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Achievements />
        <Programs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

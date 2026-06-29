import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStartedForm from './components/GetStartedForm';
import ServiceDetail from './components/ServiceDetail';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Products />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
          </main>
        } />
        <Route path="/get-started" element={<GetStartedForm />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

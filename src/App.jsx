import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GetStartedForm from './components/GetStartedForm';
import ServiceDetail from './components/ServiceDetail';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
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
            <About />
            <Testimonials />
            <Contact />
          </main>
        } />
        <Route path="/get-started" element={<GetStartedForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

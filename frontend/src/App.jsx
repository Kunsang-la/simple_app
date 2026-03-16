import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="App">
        <Hero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

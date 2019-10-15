import React from 'react';
import './bulma.min.css';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Finalsearch from './Finalsearch/Finalsearch';

function App() {
  return (
    <div className="App">
      <Hero title="Monster Hunter Notes" subtitle="A quick reference of every monster and their weaknesses, so you don't go into battle unprepared!" />
      <Finalsearch />
      <Footer />
    </div>
    
  );
}

export default App;

import React from 'react';
import './App.css';
 // Importing Card component
import Header from './components/Header'; // Assuming Header component
import Footer from './components/Footer';
import Cards from './components/Cards';  
import './components/Cards.css'
function App() {
 
  return (
    <div className="App">
      <Header />
      <h1>TRENDING COURSES</h1>
     <Cards/>
      <Footer />
    </div>
  );
}

export default App;

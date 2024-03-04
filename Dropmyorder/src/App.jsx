
import './App.css'
import Header from './Components/Header';
import React, { useState } from 'react';
import Restaurants from './Components/Restaurants';
import RestrauntCards from './Components/RestrauntCards';
import Body from './Components/Body';

const App = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Restaurants restaurant={selectedOption} />      
      <RestrauntCards />
      <Body />
      
    </>

  )
}
export default App;

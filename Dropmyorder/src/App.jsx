
import './App.css'
import Header from './Components/Header';
import React, { useState } from 'react';
import RestrauntCards from './Components/RestrauntCards';
import Body from './Components/Body';
import RestaurantsBody from './Components/RestaurantsBody';

const App = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption} />     
      {selectedOption === null ? <RestrauntCards /> : <RestaurantsBody  selectedOption={selectedOption} />}
      <Body />
      
    </>

  )
}
export default App;

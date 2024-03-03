
import './App.css'
import Header from './Components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import Restaurants from './Components/Restaurants';

const App = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <Restaurants restaurant={selectedOption} />      
    </>

  )
}
export default App;

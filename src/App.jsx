import { useState } from 'react'
import './App.css'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [cook, setCook] = useState([]);

  const handleWantToCook = recipe => {
    const addCook = [...cook, recipe];
    setCook(addCook);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cook cook={cook}></Cook>
      </div>
      
    </>
  )
}

export default App;

import './App.css'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Recipes></Recipes>
        <Cook></Cook>
      </div>
      
    </>
  )
}

export default App

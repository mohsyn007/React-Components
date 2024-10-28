import DaisyNav from './components/DaisyNav/DaisyNav'//
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {
  
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
    
    <NavBar></NavBar>
     <h1 className='text-7xl'>Good For Nothing</h1>
     
      <PriceOptions></PriceOptions>
      <LineChart ></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App

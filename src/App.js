import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import BeersList from './pages/BeersList';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App"> 
    {/* <Navbar /> */}
   

    <Routes>
      <Route path='/beers/:id' element={<BeerDetails />}> </Route>
      <Route  path="/beers" element={<BeersList />}></Route>
      <Route  path="/random-beer" element={<RandomBeer />}></Route>
      <Route  path="/new-beer" element={<NewBeer />}></Route>
      <Route exact path="/" element={<HomePage />}/>

    </Routes>
     
    </div>
  );
}

export default App;

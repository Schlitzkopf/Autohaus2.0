import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Products from './components/Products';
import Details from './components/Details';
import Navbar from "./components/Navbar";
//import {client} from "./client";
import {useState, useEffect} from "react";

function App(props) {
  const [autos, setAutos] = useState();

  useEffect(() => {
    fetch ("https://protected-fortress-31989.herokuapp.com/autos")
      .then((response) => response.json())
      .then((data) => setAutos(data.autos))
      .catch((err) => console.log(err));
  }, []);
  console.log(autos);
  return (
    <>
    {autos ? (<div className="App">
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="products" element={<Products autos={autos}/>} />
          <Route path="auto/:id" element={<Details />} />
      </Routes>
  </div>) : ("Loading...")}
  </>
  );
}

export default App;

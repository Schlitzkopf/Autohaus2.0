import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Products from './components/Products';
import Details from './components/Details';
import Navbar from "./components/Navbar";
import {client} from "./client";
import {useState, useEffect} from "react";

function App() {
  const [autos, setAutos] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setAutos(response.items);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
    {autos ? (<div className="App">
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="products" element={<Products autos={autos}/>} />
          <Route path="products/:id" element={<Details />} />
      </Routes>
  </div>) : ("Loading...")}
  </>
  );
}

export default App;

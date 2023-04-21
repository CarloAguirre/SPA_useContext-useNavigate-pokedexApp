import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemons from "./views/Pokemons";
import Context from "./context";
import { useEffect, useState } from "react";
import PokemonCard from "./views/PokemonCard";



function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const pokemonNamesFetch = async()=>{
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const data = await res.json()
      const pokemonList = data.results; 
      setPokemons(pokemonList)
    }
    pokemonNamesFetch()
  }, [])
  


  const globalState = {pokemons}

  return (
    <div className="App">
      <Context.Provider value={globalState}>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokemons" element={<Pokemons />}/>
          <Route path="/*" element={<NotFound />}/>
          <Route path="/pokemon/:name" element={<PokemonCard />}/>
        </Routes>
      </BrowserRouter>

      </Context.Provider>
   
    </div>
  );
}

export default App;

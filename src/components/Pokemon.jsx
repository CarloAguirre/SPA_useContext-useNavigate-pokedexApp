import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

import "bootstrap/dist/css/bootstrap.min.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Pokemons() {

  const {pokemons} = useContext(Context)


  const [name, setName] = useState("");
  const navigate = useNavigate();
  const irAPokemon = () => {
    navigate(`/pokemon/${name}`);
  };
  return (
    <div className="mt-5">
      <h1>Selecciona un Pokemon</h1>
      <Form.Select size="lg" onChange={({ target }) => setName(target.value)} value={name}>
        {pokemons.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </Form.Select>
      <Button variant="dark" onClick={irAPokemon} className="mt-4">ver detalle</Button>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import Context from '../context';

import "../styles.css"

export const SelectedPokemon = ({ name }) => {
  const { pokemons } = useContext(Context);
  console.log(name);

  const [url, setUrl] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    const pokemonData = async () => {
      const pokemon = pokemons.find((pokemon) => pokemon.name === name);
      setUrl(pokemon.url);
    };
    pokemonData();
  }, [name]);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.stats[0].base_stat);
      setPokemonInfo(data);
    };
    fetchData();
  }, [url]);

  return (
    <div className='card'>
      {Object.keys(pokemonInfo).length !== 0 ? (
        <Card style={{ width: '18rem' }} className='card-container'>
          <Card.Img
            variant="top"
            src={pokemonInfo.sprites?.front_default}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">              
              <ListGroup.Item>Hp: {pokemonInfo.stats[0].base_stat}</ListGroup.Item>
              <ListGroup.Item>Attack: {pokemonInfo.stats[1].base_stat}</ListGroup.Item>
              <ListGroup.Item>Defense: {pokemonInfo.stats[2].base_stat}</ListGroup.Item>
              <ListGroup.Item>Speed: {pokemonInfo.stats[5].base_stat}</ListGroup.Item>
              <ListGroup.Item>Especial Attack: {pokemonInfo.stats[3].base_stat}</ListGroup.Item>
              <ListGroup.Item>Especial Defense: {pokemonInfo.stats[4].base_stat}</ListGroup.Item>
            {pokemonInfo.abilities.map((ability, index) =>{
                return <ListGroup.Item key={index}>Attack {index +1}: {ability.ability.name}</ListGroup.Item>
            })}
          </ListGroup>
        </Card>
      ) : (
        <h2>Cargando datos...</h2>
      )}
    </div>
  );
};

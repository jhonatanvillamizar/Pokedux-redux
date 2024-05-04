import { useEffect, useState } from 'react';
import { Col } from 'antd'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fechtPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    } 

    fechtPokemons();
  }, [])

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;

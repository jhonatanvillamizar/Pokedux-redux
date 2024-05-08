import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux'
import { Col, Spin } from 'antd'
import { get } from "immutable";
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import './App.css';

function App() {
  const pokemons = useSelector(state => get(state, 'pokemons')).toJS();
  const loading = useSelector((state) => get(state, 'loading'));
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fechtPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();  
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fechtPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons}/>}
      
    </div>
  );
}


export default App;


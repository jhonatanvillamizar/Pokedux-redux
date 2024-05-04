import PokemonCard from './PokemonCard';
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return <PokemonCard />
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('') // crear un arreglo de 10 posiciones que y cada posicion va a tener este valor ('string vacio')
}

export default PokemonList
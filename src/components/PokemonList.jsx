import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon) => {
                return <PokemonCard 
                    name={pokemon.name} 
                    key={pokemon.name} 
                    image={pokemon.sprites.front_default}
                    id={pokemon.id}
                    abilities={pokemon.abilities}
                    favorite={pokemon.favorite}
                    />;
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('') // crear un arreglo de 10 posiciones que y cada posicion va a tener este valor ('string vacio')
}

export default PokemonList
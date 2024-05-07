import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons : [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: actions.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex((pokemon) => { 
                return pokemon.id === actions.payload.pokemonId});
            if (currentPokemonIndex < 0){
                return state;
            }
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return { ...state, pokemons: newPokemonList }
        case SET_LOADING:
            return { ...state, loading: actions.payload };
    default:
        return state;
    }
}
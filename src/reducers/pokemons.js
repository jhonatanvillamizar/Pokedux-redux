import { SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons : [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: actions.payload };
        case SET_LOADING:
            return { ...state, loading: actions.payload }
    default:
        return state;
    }
}
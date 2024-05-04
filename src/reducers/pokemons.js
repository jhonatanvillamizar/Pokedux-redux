import { SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons : [],
};

export const pokemonsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case SET_POKEMONS:
            return {...state, pokemons: actions.payload };
    default:
        return state;
    }
}
import charactersJSON from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';
import { combineReducers } from 'redux';

function characters(state = charactersJSON, action) {
  switch(action.type) {
    case ADD_CHARACTER: 
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  } 
}

function heroes(state = [], action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)]
      return heroes;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = charactersJSON.find(item => item.id === id);
  return character;
}

const rootReducer = combineReducers({
  characters,
  heroes,
})
export default rootReducer;

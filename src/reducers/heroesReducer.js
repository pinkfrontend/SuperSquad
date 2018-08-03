import { ADD_CHARACTER } from '../actions';
import charactersJSON from '../data/characters.json';

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

export default heroes;

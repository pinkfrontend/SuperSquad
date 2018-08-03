import { ADD_CHARACTER } from '../actions';
import charactersJSON from '../data/characters.json';

function characters(state = charactersJSON, action) {
  switch(action.type) {
    case ADD_CHARACTER: 
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  } 
}

export default characters;

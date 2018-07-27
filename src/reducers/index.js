import charactersJSON from '../data/characters.json';

function characters(state = charactersJSON, action) {
  switch(action.type) {
    default:
      return state;
  } 
}

export default characters;

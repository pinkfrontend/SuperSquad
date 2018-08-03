import charactersJSON from '../data/characters.json';

function createCharacter(id) {
  let character = charactersJSON.find(item => item.id === id);
  return character;
}

export default createCharacter;

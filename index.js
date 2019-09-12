// import { getCharacters } from './getCharacters';

window.addEventListener('load', ()=> {
  getCharacters();
});



const getCharacters = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(res => {
      const characters = res.results;
      const mainSection = document.querySelector('main')
      characters.forEach(character => {
        const el = document.createElement('new-character');
        el.character = character;
        mainSection.appendChild(el);
      })
    })
}

//When Creating an HTML Component there are 2 steps
//1. Create a class
class singleCharacter extends HTMLElement {
  set character(character) {
    this.innerHTML = `
    <a href='${character.url}'>
      <h2>${character.name}</h2>
      <img src='${character.image}' />
    </a>
    `
  }
}

//2. define the tag and what class it belongs to
customElements.define('single-character', singleCharacter);
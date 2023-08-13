import { fetchAll } from "./api.js"

const pokemons = await fetchAll()
const cardContainer = document.querySelector(".container")

for(const pokemon of pokemons) {
        cardContainer.innerHTML+=`
        <button class="card-link" id=${pokemon.id}>
            <div class="container__card">
                <div class="container__card--image-container">
                    <img src=${pokemon.sprites.front_default} alt="pokemon">
                </div>
                <div class="container__card--details-container">
                    <span class="pokemon-name">${pokemon.name}</span>
                    <span class="pokemon-type">${pokemon.types[0].type.name}</span>
                </div>
            </div>
        </button>
    `

    
}


// pokemons.forEach(pokemon => {
// });
export const allButtons = document.querySelectorAll(".card-link")

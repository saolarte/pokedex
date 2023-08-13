import { fetchById } from "./api.js"
import { allButtons } from "./fetchall.js"
const detailsContainer = document.querySelector(".details-container")

allButtons.forEach(button => {
    button.onclick = async () => {
        detailsContainer.style.display = "grid"
        const pokemon = await fetchById(button.id)
        detailsContainer.innerHTML = `
            <div class="details-container__title">
                <h2>${pokemon.name}</h2>
            </div>
            <img src=${pokemon.sprites.front_default} alt="pokemon">
            <div class="details-container__details">
                <div class="details-container__details--spec">
                    <span>Number</span>
                    <span>00${pokemon.id}</span>
                </div>
                <div class="details-container__details--spec">
                    <span>Type</span>
                    <span>${pokemon.types[0].type.name}</span>
                </div>
                <div class="details-container__details--spec">
                    <span>Ability</span>
                    <span>${pokemon.abilities[0].ability.name}</span>
                </div>
                <div class="details-container__details--spec">
                    <span>Height</span>
                    <span>${pokemon.height}</span>
                </div>
                <div class="details-container__details--spec">
                    <span>Weight</span>
                    <span>${pokemon.weight}</span>
                </div>
            </div>
        `
        
    }
})


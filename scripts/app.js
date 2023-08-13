import { allButtons } from "./fetchall.js"
const detailsContainer = document.querySelector(".details-container")

allButtons.forEach(button => {
    button.onclick = () => {
        detailsContainer.style.display = "grid"
    }
})


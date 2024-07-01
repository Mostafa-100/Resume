const navbar = document.querySelector(".navbar");

const landingHeader = document.querySelector(".landing__header");
const landingParagraph = document.querySelector(".landing__paragraph");

const landingHeaderText = "Je suis mustapha aourik";
const landingParagraphText = "Stagiaire en première année à l'ISTA - Agadir et Autodidacte en développement web.";

/* Adding dark backgroun to navbar after scroll */
window.onscroll = function () {
    if (window.scrollY > 338) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-dark", "shadow-sm");
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-dark", "shadow-sm");
    }
}

/* Adding text typing effect */
function textTypingEffect(element, text, i = 0, time) {
    return new Promise(resolve => {
        if (i == text.length) {
            resolve();
            return;
        }

        element.textContent += text[i];

        setTimeout(() => {
            textTypingEffect(element, text, i + 1, time).then(resolve);
        }, time);
    });
}

async function startTyping() {
    await textTypingEffect(landingHeader, landingHeaderText, 0, 35);
    await textTypingEffect(landingParagraph, landingParagraphText, 0, 10)
}

startTyping();

/* Bootstrap tooltip code */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
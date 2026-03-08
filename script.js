const messages = [
    "Es-tu sûre ?",
    "Réfléchis encore !",
    "Dernière chance !",
    "Tu pourrais le regretter",
    "Penses-y une dernière fois !",
    "Es-tu absolument certaine ?",
    "Cela pourrait être une erreur",
    "Pense avec ton cœur",
    "Ne sois pas froide !",
    "Décision finale ?",
    "☹"
];

let index = 0;
let noScale = 1;
let scale = 1; // taille initiale du bouton Oui

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const link = document.getElementById("next-link");

noBtn.addEventListener("click", () => {
    message.textContent = messages[index];
    index++;

    scale += 0.15;
    yesBtn.style.setProperty("--scale", scale);

    if (index === messages.length) {
        yesBtn.disabled = false;
        noBtn.disabled = true;
        yesBtn.style.setProperty("--scale", 2);
    }
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Smart choice 🙂";
    link.style.display = "block";

});

const textElement = document.getElementById("text");
const prefixElement = document.getElementById("prefix");
const phrases = ["Profession", "Specialization"];
let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 120;
let deletingDelay = 60;
let pauseBetweenPhrases = 400;

function updatePrefix() {
    if (phrases[currentPhraseIndex] === "Profession") {
        prefixElement.textContent = "•";
    } else {
        prefixElement.textContent = "•";
    }
}

function typeText() {
    updatePrefix();
    if (isDeleting) {
        if (charIndex > 0) {
            textElement.textContent = phrases[currentPhraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, deletingDelay);
        } else {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typeText, pauseBetweenPhrases);
        }
    } else {
        if (charIndex < phrases[currentPhraseIndex].length) {
            textElement.textContent = phrases[currentPhraseIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingDelay);
        } else {
            isDeleting = true;
            setTimeout(typeText, pauseBetweenPhrases);
        }
    }
}

setTimeout(typeText, pauseBetweenPhrases);


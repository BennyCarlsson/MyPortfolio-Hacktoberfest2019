/**
 * Plays MacOS startup sound when page loads
 */
window.onload = function() {
    sounds = document.getElementsByClassName("click-sound");
    document.getElementById("macosStartupSound").play();
    document.body.addEventListener("click", function() { getRandomMacOsSound().play(); }, true);
}

var sounds = [];
/**
 * Returns a random audio element
 */
function getRandomMacOsSound() {
    return sounds[Math.floor(Math.random() * sounds.length - 1)];
}
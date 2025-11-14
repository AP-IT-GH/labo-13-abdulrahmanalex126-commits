let voornaam = prompt("Wat is uw voornaam?");
let achternaam = prompt("Wat is uw achternaam?");
let leeftijd = parseInt(prompt("Wat is uw leeftijd?"));

if (
  !voornaam ||
  !achternaam ||
  voornaam.trim() === "" ||
  achternaam.trim() === ""
) {
  console.log("Vul zowel voornaam als achternaam in!");
} else {
  if (isNaN(leeftijd)) {
    console.log("Vul een geldige leeftijd in!");
  } else {
    if (leeftijd < 12 || leeftijd > 60) {
      console.log("U behoort niet tot de gezochte leeftijdsklasse!");
    } else {
      console.log(
        `Hallo ${voornaam} ${achternaam}, u bent ${leeftijd} jaar oud.`
      );
    }
  }
}

// camel case; první písmeno musí být malé
let firstName = "Lucka"; // vytvoření proměnné (= firstName)s uloženou hodnotou

console.log(firstName); // Vypíše hodnotu proměnné firstName

let lastName; // ? Deklarace proměnné - dokud nic nepřiřadím = undefined
console.log(lastName);
lastName = "Mercy"; // ? Inicializace proměnné - přiřazení hodnoty
console.log(lastName);

console.log(firstName + lastName); // ! Sloučení stringů nedělá mezery
console.log(firstName + " " + lastName); // ! Přidání mezery mezi dva stringy

lastName = "Nemercy"; // ? Reinicializace proměnné Mercy => Nemercy
console.log(lastName);

firstName = "Antonie";
console.log(firstName);
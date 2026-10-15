const actualAge = -19;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
    console.log (`${fullName} už může pít alkohol.`); // ? Text uzavřený v `` se nazývá template literal a ten mi umožňuje čitelnější zápis textů s kódem dohromady
} else if (actualAge >= 0){
    console.log(`${fullName} ještě nemůže pít alkohol. Uživateli ještě chybí ${drinkingAgeLimit - actualAge} roků.`);
} else {
    console.log("CHYBA: špatně zadaný věk! Zadejte číslo větší než 0");
}
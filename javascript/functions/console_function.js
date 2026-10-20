function logHelloWorld() {
  console.log("Ahoj světe!");
}

function logText(textParametr) {
  console.log("předaný parametr: " + textParametr);
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();
logText("Progamujeme v JavaScriptu!");
logText(); // ? Pokud nevyplním hodnotu do parametru => undefined

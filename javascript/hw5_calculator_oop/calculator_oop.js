class Calculator {
  add(a, b) {
    const result = a + b;
    console.log(`Výsledek sčítání: ${a} + ${b} = ${result}`);
    return result;
    
  }

  subtract(a, b) {
    const result = a - b;
    console.log(`Výsledek odčítání: ${a} - ${b} = ${result}`);
    return result;  
  }

  multiple(a, b) {
    const result = a * b;
    console.log(`Výsledek násobení: ${a} * ${b} = ${result}`);
    return result;
  }

  divide(a, b) {
    const result = a / b;
    console.log(`Výsledek dělení: ${a} / ${b} = ${result}`);
    return result;
  }
}

const calculator = new Calculator();
calculator.add(14, 41);
calculator.subtract(174, 32);
calculator.multiple(47, 50);
calculator.divide(125, 7);

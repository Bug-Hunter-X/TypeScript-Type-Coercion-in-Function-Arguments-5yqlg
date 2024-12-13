function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is correctly inferred as number
let result2 = subtract(result, 2); // result2 is correctly inferred as number

//This is the problematic part 
let result3 = add(result2, "5"); // Type error is not thrown, even though the function is expecting a number
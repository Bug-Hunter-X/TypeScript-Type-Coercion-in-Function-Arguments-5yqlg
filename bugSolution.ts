function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
    return typeof value === 'number';
}

let result = add(5, 3); // result is correctly inferred as number
let result2 = subtract(result, 2); // result2 is correctly inferred as number

//This is the corrected part 
// Using a type guard to check if the input is a number
if (isNumber(result2) && isNumber("5" as any)) {
  let result3 = add(result2, +("5" as any)); // Explicit type conversion to number
  console.log(result3);
} else {
  console.error("Invalid input type for add function");
}
//Setting the compiler option to --strictNullChecks will also help prevent this issue.
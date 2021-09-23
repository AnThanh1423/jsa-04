//1. The pH Scale
// let pH = prompt("Enter the pH Scale")
// if (pH < 0 && pH > 14) {
//     console.log("Invalid")
// }else if (pH > 7) {
//     console.log("alkaine")
// }else if (pH == 7) {
//     console.log("neutral")
// }else {
//     console.log("acidic")
// }

//2. BMI Calculator
// function CalculateBMI(weight, height,) {
//     let inch = height / 100;
//     let bmi= weight/ (inch * inch)^2;
//     if(bmi<=19)
//     return "Underweight"
//     else if(19<bmi<=25)
//     return"Desirable"
//     else if(25<bmi<=29)
//     return"Prone to health risks"
//     else if(29<bmi<=40)
//     return"obese"
//     else(40<bmi)
//     return"Extremely Obese" };
//     console.log(CalculateBMI(60, 170))
//Sai
//3. Quadratic expression Calculate
// let root1, root2;

// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else { 
//     console.log(`No solution`)
// }
//4. Narcissistic numbers
// const isNarcissistic = (num) => {
//        let m = 1, count = 0;
//        while(num / m > 1){
//           m *= 10;
//           count++;
//        };
//        let sum = 0, temp = num;
//        while(temp){
//           sum += Math.pow(temp % 10, count);
//           temp = Math.floor(temp / 10);
//        };
//        return sum === num;
//     };
//     console.log(isNarcissistic(153));
//     console.log(isNarcissistic(1634));
//     console.log(isNarcissistic(1433));
//     console.log(isNarcissistic(342));
//5. Last Digit Ultimate
// function LastDigit(x, y, z)  {
//     let x1 = x % 10;
//     let y1 = y % 10;
//     let z1 = z % 10;
//     let total = x1 * y1;
//     let total1 = total % 10;
//     if (total1 == z1)
//     return `true`;
//     return `false`;
// }
// console.log(LastDigit(12, 215, 2142))

    
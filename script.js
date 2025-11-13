let number = 15;
let square= Math.pow(number,2)

if (square > 100) {
    console.log("მეტია ასზე");
} else {
console.log("ნაკლებია ასზე");
}

let number2 = 65;

if (number2 > 50 && number2 < 100) {
    console.log("რიცხვი 50-ზე მეტია და 100-ზე ნაკლებია");
} else {
    console.log("რიცხვი 50-ზე ნაკლებია ან 100-ზე მეტი");
}

let number3 = -20;

if (number3 === 0) {
  console.log("რიცხვი ნულის ტოლია");
} else if (number3 < 0) {
  console.log("რიცხვი უარყოფითია");
} else {
  console.log("რიცხვი დადებითია");
}

let length = 10
let width = 12

let perimeter = 2 * ( length + width)

if (perimeter > 50) {
    console.log("პერიმეტრი არის 50-ზე მეტი");
} else {
    console.log("პერიმეტრი არის 50-ზე ნაკლები ან ტოლი");
    
}

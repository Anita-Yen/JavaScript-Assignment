function bmiCalculator(weight,height) {
    let bmi=(weight/(height*height))*10;

if (bmi <= 18.5){
    console.log("You are underweight")
}
else if(bmi >= 18.5 || bmi <= 24.9){
    console.log("You are normal weight")
}
else if(bmi >= 25 || bmi >= 29.9) {
    console.log("You are overweight")
}
else{
    console.log("You are obese")
}
}
console.log(bmiCalculator(91,0))
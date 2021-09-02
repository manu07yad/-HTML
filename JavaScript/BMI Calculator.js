function BMICalculator(weight,height)
{
    var BMI= weight/height*height;
    return Math.floor(BMI);
}
var weight,height;
weight=prompt("Enter weight");
height=prompt("Enter height");
var bmi=(BMICalculator(weight,height));
alert("BMI is "+bmi);

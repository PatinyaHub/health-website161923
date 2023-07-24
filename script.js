function calculateBmi(){
    // Get weight and height values from input
    let weight = parseFloat(document.getElementById("weight").value)
    let higth = parseFloat(document.getElementById("hight").value)

    //calculate bmi
    let bmi = weight / ((higth/100)**2);

    //display advice
    let advice
    if(bmi < 18.50){
		advice = " น้ำหนักต่ำกว่าเกณฑ์ไปนะจ๊ะ"
	}
    else if(bmi <= 22.90){
		advice = " สมส่วนแล้ว พอดีแล้ว"
	}
	else if(bmi <= 24.90){
		advice = " เริ่มจะอ้วนแล้วนะ"
	}
	else if(bmi <= 29.90){
		advice = " อ้วนๆ"
	}
	else{
		advice = " โรคอ้วนอันตรายมากๆ"
	}
    //display result
    let result = "BMI ของคุณเท่ากับนี้นะจ๊ะ : " + bmi.toFixed(2) + advice
	document.getElementById("result").innerHTML = result
}
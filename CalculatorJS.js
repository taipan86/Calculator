var currentValue = document.getElementById("currentValueInput");
var currentNumber = "";
var oldValue = document.getElementById("oldValueInput");
var memory = 0;
var memoryDisplay = document.getElementById("memoryExists");

//1. butoanele 0-9 

handlers = {
	numberButton: function (buttonValue) {
			currentNumber = currentNumber+buttonValue;
			currentValue.value = parseFloat(currentNumber);
	},

//2. butoanele + - / * 
	operationButton: function (operationType) {
		if (currentNumber === ""){
		} 
		else {
			oldValue.value = oldValue.value + currentValue.value + operationType;
			currentNumber = "";
		}
	},
//3. butonul +/- 
	negateButton: function () {
		currentValue.value = -currentValue.value;
	},
//4. butonul SQRT
    sqrtButton: function (){
    	currentValue.value = Math.sqrt(currentValue.value);
    },

//5. butonul 1/x	
	reciprocButton: function (){
		currentValue.value= 1/currentValue.value;
	},

//6. butonul = 
	equalButton: function (){
		oldValue.value = oldValue.value + currentValue.value;
		currentValue.value = eval(oldValue.value);
		oldValue.value = "";
		currentNumber = "0";
	},

//7. butonul Del
	delButton: function (){
		currentNumber = currentNumber.substring(0, currentNumber.length-1);
		currentValue.value = parseFloat(currentNumber);
	},

//8. butonul CE sa stearga tot ce e in currentNumber
	ceButton: function (){
		currentValue.value = 0;
		currentNumber = "";
	},

//9. butonul C sa stearga tot ce e in currentNumber si oldValue
	cButton: function (){
		currentValue.value = 0;
		oldValue.value = "";
		currentNumber = "";
	},

//10. butonul MC sa stearga ce e in memory
	mcButton: function (){
		memory = 0;
		memoryDisplay.style.display = "none";
		currentNumber = "0";
	},

//11. butonul MR sa aduca in currentNumber ce e in memory
	mrButton: function (){
		currentValue.value = memory;
		currentNumber = "0";
	},

//12. butonul MS sa puna in memory ce e in currentNumber
	msButton: function (){
		memory = parseFloat(currentValue.value);
		memoryDisplay.style.display = "block";
		currentNumber = "0";
	},

//13. butonul M+ sa adune la memory ce e in currentNumber
	mplusButton: function (){
		memory = memory + parseFloat(currentValue.value);
		memoryDisplay.style.display = "block";
		currentNumber = "0";
	},

//14. butonul M- sa scada din memory ce e in currentNumber
	mminusButton: function (){
		memory = memory - parseFloat(currentValue.value);
		memoryDisplay.style.display = "block";
		currentNumber = "0";
	},

//15. butonul %
	percentageButton: function () {
		currentValue.value = parseFloat(oldValue.value.substring
			(0, oldValue.value.length-1)) * parseFloat(currentNumber) / 100;
	}
};
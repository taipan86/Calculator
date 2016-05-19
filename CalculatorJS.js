"use strict";
//1. butoanele 0-9 

var handlers = {

	currentValue: document.getElementById("currentValueInput"),
	currentNumber: "",
	oldValue: document.getElementById("oldValueInput"),
	memory: 0,
	memoryDisplay: document.getElementById("memoryExists"),
	errorMessage: document.getElementById("divideBy0"),

	numberButton: function (buttonValue) {
		handlers.errorMessage.style.display = "none";
		handlers.currentNumber = handlers.currentNumber+buttonValue;
		handlers.currentValue.value = parseFloat(handlers.currentNumber);
	},

//2. butoanele + - / * 
	operationButton: function (operationType) {
		if (handlers.currentNumber){		 
			handlers.oldValue.value = handlers.oldValue.value + handlers.currentValue.value + operationType;
			handlers.currentNumber = "";
		}
	},
//3. butonul +/- 
	negateButton: function () {
		handlers.currentValue.value = -handlers.currentValue.value;
	},
//4. butonul SQRT
    sqrtButton: function (){
    	if (isNaN(eval(handlers.oldValue.value))) {
    		handlers.errorMessage.style.display = "block";
    		handlers.oldValue.value = "";
		handlers.currentNumber = "0";
    	}
    	else {
    		handlers.currentValue.value = Math.sqrt(handlers.currentValue.value);
    	};
    },

//5. butonul 1/x	
	reciprocButton: function (){
		handlers.currentValue.value= 1/handlers.currentValue.value;
	},

//6. butonul = 
	equalButton: function (){
		handlers.oldValue.value = handlers.oldValue.value + handlers.currentValue.value;
		if (eval(handlers.oldValue.value) === Infinity || 
			eval(handlers.oldValue.value) === -Infinity) {
			handlers.currentValue.value = "";
			handlers.errorMessage.style.display = "block";
		}
		else {
			handlers.currentValue.value = eval(handlers.oldValue.value);
		}
		handlers.oldValue.value = "";
		handlers.currentNumber = "0";
	},

//7. butonul Del
	delButton: function (){
		handlers.currentNumber = handlers.currentNumber.substring(0, handlers.currentNumber.length-1);
		handlers.currentValue.value = parseFloat(handlers.currentNumber);
	},

//8. butonul CE 
	ceButton: function (){
		handlers.currentValue.value = 0;
		handlers.currentNumber = "";
	},

//9. butonul C
	cButton: function (){
		handlers.currentValue.value = 0;
		handlers.oldValue.value = "";
		handlers.currentNumber = "";
	},

//10. butonul MC 
	mcButton: function (){
		handlers.memory = 0;
		handlers.memoryDisplay.style.display = "none";
		handlers.currentNumber = "0";
	},

//11. butonul MR 
	mrButton: function (){
		handlers.currentValue.value = handlers.memory;
		handlers.currentNumber = "0";
	},

//12. butonul MS 
	msButton: function (){
		handlers.memory = parseFloat(handlers.currentValue.value);
		handlers.memoryDisplay.style.display = "block";
		handlers.currentNumber = "0";
	},

//13. butonul M+
	mplusButton: function (){
		handlers.memory = handlers.memory + parseFloat(handlers.currentValue.value);
		handlers.memoryDisplay.style.display = "block";
		handlers.currentNumber = "0";
	},

//14. butonul M-
	mminusButton: function (){
		handlers.memory = handlers.memory - parseFloat(handlers.currentValue.value);
		handlers.memoryDisplay.style.display = "block";
		handlers.currentNumber = "0";
	},

//15. butonul %
	percentageButton: function () {
		handlers.currentValue.value = parseFloat(handlers.oldValue.value.substring
			(0, handlers.oldValue.value.length-1)) * parseFloat(handlers.currentNumber) / 100;
	}
};
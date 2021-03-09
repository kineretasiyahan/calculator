let numbersButtons = "";
let rightside;
let leftside;
let operatorButton;

let mainInput = document.getElementById('printNumbers');

document.body.addEventListener('click', function(event) {
    let { target } = event;

    if(target.value) {
        numbersButtons += target.value;
        mainInput.value = numbersButtons;
    }
    else if(target.classList.contains("operator")) {
        operatorButton = target.id;
        leftside = Number.parseFloat(numbersButtons);

        numbersButtons ="";
    }else if(target.id ==='even') {
        rightside = Number.parseFloat(numbersButtons);
        const result = applyOperator(leftside, rightside, operatorButton);
        mainInput.value = result;
    }

    else if(target.id === "reset") {
        mainInput.value ="";
        numbersButtons="";
        rightside="";
        leftside="";
        operatorButton="";
    }
})
    function applyOperator (leftside, rightside, operator) {
        switch (operator) {
            case "dev":
                return leftside / rightside;
            case "multi":
                return leftside * rightside;
            case "minus":
                return leftside - rightside;
            case "plus":
                return leftside + rightside; }}
// First Calculator

function calculation() {

    var x, y, res;

    x = parseInt(prompt('Enter First Number:'));

    y = parseInt(prompt('Enter Second Number:'));

    res = parseInt(prompt('Enter between 1-5:'));

    switch (res) {

        case 1:
            document.getElementById("result").innerHTML = x + y;
            break;

        case 2: {
            document.getElementById("result").innerHTML = x - y;
            break;
        }

        case 3: {
            document.getElementById("result").innerHTML = x * y;
            break;
        }

        case 4: {
            document.getElementById("result").innerHTML = x / y;
            break;
        }

        case 5: {
            document.getElementById("result").innerHTML = x % y;
            break;
        }

        default: {
            document.getElementById("result").innerHTML = ("Please write a valid number between 1 to 5");
        }
    }
}


// Second Calculator

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var ans = document.getElementById("options").value;

    switch (ans) {
        case 'addition':
            document.getElementById("answer").value = num1 + num2;
            break;
        case 'subtraction':
            document.getElementById("answer").value = num1 - num2;
            break;
        case 'multiplication':
            document.getElementById("answer").value = num1 * num2;
            break;
        case 'division':
            document.getElementById("answer").value = num1 / num2;
            // Check for division by zero
            if (num2 !== 0) {
                document.getElementById("answer").value = num1 / num2;
            } else {
                document.getElementById("answer").value = "Cannot divide by zero";
            }
            break;
        case 'remainder':
            document.getElementById("answer").value = num1 % num2;
            break;
        default:
            document.getElementById("answer").value = "Wrong input";
    }
}




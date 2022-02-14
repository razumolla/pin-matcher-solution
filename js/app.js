// Random pin Generate, class: 28.5
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if (pinstring.length == 4) {
        return pin;
    }
    else {
        // console.log('Got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin)
}

// 2nd part: class-28.6
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const calcInput = document.getElementById('typed-numbers');
        const number = event.target.innerText;
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number
            calcInput.value = newNumber;
        }

    }
);

//class-28.7:  submit button event handler

function verifyPin() {
    const randomPin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;
    const pinSuccess = document.getElementById('notify-success');
    const pinError = document.getElementById('notify-fail');

    if (randomPin == typeNumbers) {
        pinSuccess.style.display = 'block';
        pinError.style.display = 'none'; //error msg hide

    } else {
        pinError.style.display = 'block';
        pinSuccess.style.display = 'none';//success msg hide

    }
}

// Please Try It Again!!
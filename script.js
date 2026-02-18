// Global counter variable
let counter = 0;

// 1️⃣ Increase counter
function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

// 1️⃣ Decrease counter
function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

// 2️⃣ Simple For Loop
function runForLoop() {
    let result = "";
    
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

// 3️⃣ Show Odd Numbers
function showOddNumbers() {
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

// 4️⃣ Multiples of 5 in Reverse Order
function addMultiplesToArray() {
    let multiples = [];

    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                multiples.push(i);
            }
        }
    }

    console.log(multiples);
}

// 5️⃣ Print Car Object
function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

// 6️⃣ Load Car Object into Form
function loadCar(carNumber) {
    let selectedCar;

    if (carNumber === 1) {
        selectedCar = carObject1;
    } else if (carNumber === 2) {
        selectedCar = carObject2;
    } else if (carNumber === 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// 7️⃣ Change Paragraph Color
function changeColor(option) {
    let paragraph = document.getElementById("styleParagraph");

    if (option === 1) {
        paragraph.style.color = "red";
    } else if (option === 2) {
        paragraph.style.color = "green";
    } else if (option === 3) {
        paragraph.style.color = "blue";
    }
}

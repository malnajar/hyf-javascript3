//Step 1

// Request #1

//A start value
//An end value
//A callback to call if the number is divisible by 3
//A callback to use if the number is divisible by 5

let array = [];


function div3(num) {
    console.log(num + ' is divisible by three!')
}

function div5(num) {
    console.log(num + ' is divisible by five!')
}

function div3and5(num) {
    console.log(num + ' is divisible by three and divisible by five!')
}

function arrayGenerator(startValue, endValue, callbackDiv3, callbackDiv5) {

    const array = []

    if (startValue < endValue) {

        let i = startValue
        while (i <= endValue) {
            array.push(i);
            i++;
            

            if (i % 3 === 0) {

                const num = i
                callbackDiv3(num);

            } else if (i % 5 === 0) {
                const num = i
                callbackDiv5(num);

            } 
        } console.log(array);


    } else {
        console.log("Error");
    }

}

arrayGenerator(1, 20, div3, div5);


// Request #2

// 2. Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

// 2.1 A for loop.

function repeatStringNumTimes(str, num) {
    var str1 = "";
    for (i = num; i > 0; i--) {

        str1 += str;
    }
    str = str1;
    return str;
}

// 2.2 A while loop.

function repeatStringNumTimes(str, num) {
    var str1 = "";
    while (num > 0) {


        str1 += str;

        num--;

    }
    str = str1;
    return str;
}

repeatStringNumTimes("abc", 3);


// 2.3 A do loop.


function repeatStringNumTimes(str, num) {
    var str1 = "";
    do {
        str1 += str;
        num--;
    }
    while (num > 0);

    str = str1;

    return str;
}

repeatStringNumTimes("abc", 3);

// Request #3

var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

// Only change code below this line.

var MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;
};

// Request #4

//Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++) {
            product *= arr[i][x];
        }
    }

    // Only change code above this line

    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// Request #5

var arr3d = [[[4, 2], [3, 1]], [[8, 7] ,[5, 6]]]

function multiDimensionalArray(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {

            for (let k = 0; k < array[i][j].length; k++) {

                console.log(array[i][j][k]);
            }
        }
    }
}

// multiDimensionalArray(arr3d);
var multiArray = [[["a", "b"], [["c"], ["d"]]], [["e", "f"], ["g", "h"]]]

function multiXDimensionalArray(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] != null) {
            for (let j = 0; j < array[i].length; j++) {

                for (let k = 0; k < array[i][j].length; k++) {

                    console.log(array[i][j][k]);
                }
            }
        }
    }
}

// Request #6

//explain what's going on here.

let x = 9;
function f1(val) {
    val = val + 1;
    return val;

}
f1(x); // we passed the value of x in to f1 function 
console.log(x);// since we did not change the value of it in f1 function it is still 9


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y); //as a parameter and the function changes the object's properties and values, that change is visible outside the function
console.log(y);
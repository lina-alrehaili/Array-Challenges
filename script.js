// --------------------------------------- part-1 --------------------------------------- //
function alwaysHungry(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0)
        console.log("I'm hungry");
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// --------------------------------------- part-2 --------------------------------------- //
function highPass(arr, cutoff) {
    var filteredArr = [];
    var count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >cutoff) {
            filteredArr[count]=arr[i];
        }
        count++;
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// --------------------------------------- part-3 --------------------------------------- //
function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i];
    }
    var average = sum/arr.length;
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>average)
        count++;
    }    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// --------------------------------------- part-4 --------------------------------------- //
function reverse(arr) {
    var newArr=[];
    for (let i = (arr.length-1); i >=0; i--) {
        newArr.push(arr[i]);
    }  
    arr=newArr;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// --------------------------------------- part-5 --------------------------------------- //
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var newArr=[];
    var sum=0;
    for (let i = 0; i < n-2; i++) {
        sum=fibArr[i]+fibArr[i+1];
        console.log(sum);
        newArr.push(sum);
        fibArr[i+2]=sum;
    }    
    fibArr=newArr;
    return fibArr;
}   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



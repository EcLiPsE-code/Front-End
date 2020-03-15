"use strict";

function strGenerate(len) {
    let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let outputStr = "";
    while (outputStr.length < len) {
        outputStr += abc[Math.floor(Math.random() * abc.length)];
    }
    let sum = 0;
    let charArray = [];
    outputStr.toUpperCase().split('')
        .forEach((value, index, array) => {
            if (outputStr.charCodeAt(index) % 5 !== 0){
                sum += outputStr.charCodeAt(index) % 5;
                charArray.push(outputStr.charCodeAt(index));
            }
        });
    return {charArray, sum, outputStr}
}

function getArgsAvg(array) {
    let sum = 0;
    let avgSum = 0;
    for (let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }
    avgSum = sum/array.length;
    sum = 0;
    array.forEach(n => sum += 1 / n);
    let avgHarmonic = array.length / sum;
    return {avgSum, avgHarmonic};
}

module.exports.strGenerate = strGenerate;
module.exports.getArgsAvg = getArgsAvg;
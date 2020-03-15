'use strict';

/**
 * @return {null}
 */
function ParserListenerText(text) {
    if (text !== ''){
        let newText = text.split(' ');
        let reverseText = newText.reverse();
        return reverseText[1];
    }else{
        return null;
    }
}

function calcCountHourAction(firstDate, secondDate, firstTime, secondTime) {
    let newFirstDate = new Date(firstDate
        + 'T' + firstTime).getTime();
    let newSecondDate = new Date(secondDate +
        'T' + secondTime).getTime();

    let out = Math.abs((newFirstDate - newSecondDate)) / 3600 / 1000;
    return out;
}
module.exports.parserText = ParserListenerText;
module.exports.calcCountHourAction = calcCountHourAction;
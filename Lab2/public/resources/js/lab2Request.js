function requestParseText() {
    let text = document.getElementById('textTask1').value;
    let jsonText = JSON.stringify({
        'text' : text
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/parser-text', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonText);
    xhr.onload = () => {
        if (xhr.status === 400){
            document.getElementById('resSearch').innerHTML = 'Пустая строка, вы не ввели исходные данные';
        }
        else if (xhr.status !== 200){
            document.getElementById('resSearch').innerHTML = 'Не удалось получить ответ с сервера';
        }
        else{
            document.getElementById('resSearch').innerHTML = 'Результат поиска: ' + xhr.response.answer;
        }
    }
}
function requestCalcDate() {
    let firstDate = document.getElementById('firstDate').value;
    let secondDate = document.getElementById('secondDate').value;
    let firstTime = document.getElementById('firstTime').value;
    let secondTime = document.getElementById('secondTime').value;

    let data = {
        'firstDate' : firstDate,
        'secondDate' : secondDate,
        'firstTime' : firstTime,
        'secondTime' : secondTime
    };
    let jsonData = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/calc-date', true);

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonData);
    xhr.onload = () => {
        if(xhr.status === 400){
            document.getElementById('resCalc').innerHTML = 'Вы не ввели все исходные данные';
        }
        else if (xhr.status !== 200){
            document.getElementById('resCalc').innerHTML = 'Не удалось получить данные с сервера';
        }else{
            document.getElementById('resCalc').innerHTML = 'Результат вычислений: ' + xhr.response.answer;
        }
    }
}
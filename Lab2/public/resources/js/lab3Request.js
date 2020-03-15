function requestGenerateString() {
    let size = document.getElementById('enterSizeStringId').value;
    let jsonSize = JSON.stringify({
       'size' : size
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/generate-string', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonSize);
    xhr.onload = () => {
        if (xhr.status === 400){
            document.getElementById('resGenerate').innerHTML = 'Вы не ввели размер генерируемой строки'
        }
        if (xhr.status !== 200){
            document.getElementById('resGenerate').innerHTML = 'Не удалось получить ответ с сервера';
        }
        else{
            document.getElementById('generateStringId').innerHTML = xhr.response.string;
            document.getElementById('resGenerate').innerHTML = 'Результат: ' + xhr.response.charArray + ' Сумма кодов: ' +xhr.response.sum;
        }
    }
}
function requestCreateFunction() {
    let string = document.getElementById('enterNumbersTask2').value;
    let array = string.split(',');
    let jsonString = JSON.stringify({
       'array' : array
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/create-function');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonString);
    xhr.onload = () => {
        if (xhr.status === 400){
            document.getElementById('resCalc').innerHTML = 'Пустая строка, вы не ввели исходные данные';
        }
        else if (xhr.status !== 200){
            document.getElementById('resCalc').innerHTML = 'Не удалось получить ответ с сервера';
        }
        else{
            document.getElementById('resCalc').innerHTML = 'Среднее арифметическое: ' + xhr.response.avgSum + ' Среднее гармоническое: ' + xhr.response.avgHarmonic;
        }
    }
}
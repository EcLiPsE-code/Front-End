'use strict';

/*создание вектора*/
function createVector() {
    let dataJSON = JSON.stringify({
      'X' : document.getElementById('enterX').value,
      'Y' : document.getElementById('enterY').value,
      'Z' : document.getElementById('enterZ').value,
      'Name' : document.getElementById('enterName').value,
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/create-vector', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let thName = document.createElement('th');
            let thX = document.createElement('th');
            let thY = document.createElement('th');
            let thZ = document.createElement('th');

            thName.innerHTML = 'Название';
            thX.innerHTML = 'Координата X';
            thY.innerHTML = 'Координата Y';
            thZ.innerHTML = 'Координата Z';

            tr.appendChild(thName);
            tr.appendChild(thX);
            tr.appendChild(thY);
            tr.appendChild(thZ);
            tableBody.appendChild(tr);
            for (let i = 0; i < xhr.response.arrayVectors.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 4; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.arrayVectors[i].Name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.arrayVectors[i].X;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.arrayVectors[i].Y;
                        tr.appendChild(td);
                    }
                    else{
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.arrayVectors[i].Z;
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
            }
        }
        else if (xhr.status === 404){
            alert('Такого url не существует');
        }
        else{
            alert('Серверу не удалось отправить ответ');
        }
    }
}
/*сложение двух векторов*/
function addVectors() {
    let jsonData = JSON.stringify({
        'firstNameVector' : document.getElementById('firstName').value,
        'secondNameVector' : document.getElementById('secondName').value,
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/add-vectors', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonData);
    xhr.onload = () => {
        if (xhr.status === 200){
            if (xhr.response === 0){
                document.getElementById('errorPrint').innerHTML = 'Некорректные значения имени вектора (векторов)';
            }else{
                document.getElementById('sumRes').innerHTML = 'X: ' +xhr.response.plus.X+ ', Y: ' +xhr.response.plus.Y+ ', Z: ' +xhr.response.plus.Z+ ', Name: ' +xhr.response.plus.Name;
            }
        }
        else if (xhr.status === 404) {
            alert('Такого url-адреса не существует');
        }else{
            alert('Серверу не удалось отправить ответ');
        }
    }
}
function scalarVectors() {
    let jsonDate = JSON.stringify({
       'firstNameVector' : document.getElementById('firstName').value,
       'secondNameVector' : document.getElementById('secondName').value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/scalar-vectors', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(jsonDate);
    xhr.onload = () => {
        if (xhr.status === 200){
            if (xhr.response === 0){
                document.getElementById('errorPrint').innerHTML = 'Некорректные значения имени вектора (векторов)';
            }else{
                document.getElementById('multiplyRes').innerHTML = 'Результат скалярного умножения: ' +xhr.response.scalar;
            }
        }
        else if (xhr.status === 404) {
            alert('Такого url-адреса не существует');
        }else{
            alert('Серверу не удалось отправить ответ');
        }
    }
}
function updateTable() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/update-table', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let thName = document.createElement('th');
            let thX = document.createElement('th');
            let thY = document.createElement('th');
            let thZ = document.createElement('th');

            thName.innerHTML = 'Название';
            thX.innerHTML = 'Координата X';
            thY.innerHTML = 'Координата Y';
            thZ.innerHTML = 'Координата Z';

            tr.appendChild(thName);
            tr.appendChild(thX);
            tr.appendChild(thY);
            tr.appendChild(thZ);
            tableBody.appendChild(tr);
            for (let i = 0; i < xhr.response.tableValue.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 4; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.tableValue[i].Name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.tableValue[i].X;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.tableValue[i].Y;
                        tr.appendChild(td);
                    }
                    else{
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.tableValue[i].Z;
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
                document.getElementById('errorPrint').innerHTML = 'Таблица векторов успешно обновлена';
            }
        }else{
            document.getElementById('errorPrint').innerHTML = 'Не удалось обновить таблицу векторов';
        }
    }
}
function createStudentRequestLab6() {
    let dataJSON = JSON.stringify({
        'name' : document.getElementById('enterNameId__l6').value,
        'surname' : document.getElementById('enterSurnameId__l6').value,
        'lastName' : document.getElementById('enterLastName__l6').value,
        'age' : document.getElementById('enterAge__l6').value,
        'speciality' : document.getElementById('enterSpeciality__l6').value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/create-student-lab-6', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody__l6");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let nameStudent = document.createElement('th');
            let surnameStudent = document.createElement('th');
            let lastNameStudent = document.createElement('th');
            let ageStudent = document.createElement('th');
            let specialityStudent = document.createElement('th');
            let editDataStudent = document.createElement('th');
            let deleteDataAboutStudent = document.createElement('th');

            nameStudent.innerHTML = 'Имя студента';
            surnameStudent.innerHTML = 'Фамилия студента';
            lastNameStudent.innerHTML = 'Отчество студента';
            ageStudent.innerHTML = 'Возраст студента';
            specialityStudent.innerHTML = 'Специальность студента';
            editDataStudent.innerHTML = 'Редактирование';
            deleteDataAboutStudent.innerHTML = 'Удаление';

            tr.appendChild(nameStudent);
            tr.appendChild(surnameStudent);
            tr.appendChild(lastNameStudent);
            tr.appendChild(ageStudent);
            tr.appendChild(specialityStudent);
            tr.appendChild(editDataStudent);
            tr.appendChild(deleteDataAboutStudent);
            tableBody.appendChild(tr);

            for (let i = 0; i < xhr.response.listStudents.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.listStudents[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            document.getElementById('enterNameId__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('enterSurnameId__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('enterLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('enterAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('enterSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            let answer = confirm('Вы действительно хотите удалить данного студента?');
                            if (answer){
                                deleteStudent(document.getElementById('currentValueName__l6').value, document.getElementById('currentValueSurname__l6').value,
                                    document.getElementById('currentValueLastName__l6').value, document.getElementById('currentValueAge__l6').value,
                                    document.getElementById('currentSpeciality__l6').value)
                            }
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
            }
        }else{
            document.getElementById('printError').innerHTML = 'Не удалось получить ответ с сервера';
        }
    }
}
function updateTableByStudentLab6() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/update-table-students-lab-6', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody__l6");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let nameStudent = document.createElement('th');
            let surnameStudent = document.createElement('th');
            let lastNameStudent = document.createElement('th');
            let ageStudent = document.createElement('th');
            let specialityStudent = document.createElement('th');
            let editDataStudent = document.createElement('th');
            let deleteDataAboutStudent = document.createElement('th');

            nameStudent.innerHTML = 'Имя студента';
            surnameStudent.innerHTML = 'Фамилия студента';
            lastNameStudent.innerHTML = 'Отчество студента';
            ageStudent.innerHTML = 'Возраст студента';
            specialityStudent.innerHTML = 'Специальность студента';
            editDataStudent.innerHTML = 'Редактирование';
            deleteDataAboutStudent.innerHTML = 'Удаление';

            tr.appendChild(nameStudent);
            tr.appendChild(surnameStudent);
            tr.appendChild(lastNameStudent);
            tr.appendChild(ageStudent);
            tr.appendChild(specialityStudent);
            tr.appendChild(editDataStudent);
            tr.appendChild(deleteDataAboutStudent);
            tableBody.appendChild(tr);
            for (let i = 0; i < xhr.response.listStudents.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.listStudents[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            document.getElementById('enterNameId__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('enterSurnameId__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('enterLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('enterAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('enterSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            deleteStudent(document.getElementById('currentValueName__l6').value, document.getElementById('currentValueSurname__l6').value,
                            document.getElementById('currentValueLastName__l6').value, document.getElementById('currentValueAge__l6').value,
                            document.getElementById('currentSpeciality__l6').value)
                            };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
            }
        }else{
            document.getElementById('printError').innerHTML = 'Не удалось получить ответ с сервера';
        }
    }
}
function updateStudentLab6() {
    let dataJSON = JSON.stringify({
        'currentValue' : {
            'name' : document.getElementById('currentValueName__l6').value,
            'surname' : document.getElementById('currentValueSurname__l6').value,
            'lastName' : document.getElementById('currentValueLastName__l6').value,
            'age' : document.getElementById('currentValueAge__l6').value,
            'speciality' : document.getElementById('currentSpeciality__l6').value
        },
        'newValue' : {
            'name' : document.getElementById('enterNameId__l6').value,
            'surname' : document.getElementById('enterSurnameId__l6').value,
            'lastName' : document.getElementById('enterLastName__l6').value,
            'age' : document.getElementById('enterAge__l6').value,
            'speciality' : document.getElementById('enterSpeciality__l6').value
        }
    });
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', '/api/update-data-current-student-lab6', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () =>{
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody__l6");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let nameStudent = document.createElement('th');
            let surnameStudent = document.createElement('th');
            let lastNameStudent = document.createElement('th');
            let ageStudent = document.createElement('th');
            let specialityStudent = document.createElement('th');
            let editDataStudent = document.createElement('th');
            let deleteDataAboutStudent = document.createElement('th');

            nameStudent.innerHTML = 'Имя студента';
            surnameStudent.innerHTML = 'Фамилия студента';
            lastNameStudent.innerHTML = 'Отчество студента';
            ageStudent.innerHTML = 'Возраст студента';
            specialityStudent.innerHTML = 'Специальность студента';
            editDataStudent.innerHTML = 'Редактирование';
            deleteDataAboutStudent.innerHTML = 'Удаление';

            tr.appendChild(nameStudent);
            tr.appendChild(surnameStudent);
            tr.appendChild(lastNameStudent);
            tr.appendChild(ageStudent);
            tr.appendChild(specialityStudent);
            tr.appendChild(editDataStudent);
            tr.appendChild(deleteDataAboutStudent);
            tableBody.appendChild(tr);
            for (let i = 0; i < xhr.response.listStudents.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.listStudents[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            document.getElementById('enterNameId__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('enterSurnameId__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('enterLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('enterAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('enterSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            let answer = confirm('Вы действительно хотите удалить данного студента?');
                            if (answer){
                                deleteStudent(document.getElementById('currentValueName__l6').value, document.getElementById('currentValueSurname__l6').value,
                                    document.getElementById('currentValueLastName__l6').value, document.getElementById('currentValueAge__l6').value,
                                    document.getElementById('currentSpeciality__l6').value)
                            }
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
            }
        }else{
            document.getElementById('printError').innerHTML = 'Не удалось получить ответ с сервера';
        }
    }
}
function deleteStudent() {
    let dataJSON = JSON.stringify({
        'currentStudent' : {
            'name' : document.getElementById('currentValueName__l6').value,
            'surname' : document.getElementById('currentValueSurname__l6').value,
            'lastName' : document.getElementById('currentValueLastName__l6').value,
            'age' : document.getElementById('currentValueAge__l6').value,
            'speciality' : document.getElementById('currentSpeciality__l6').value
            }
    });
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/api/student-delete-lab6', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody__l6");
            tableBody.innerHTML = "";
            let tr = document.createElement('tr');
            let nameStudent = document.createElement('th');
            let surnameStudent = document.createElement('th');
            let lastNameStudent = document.createElement('th');
            let ageStudent = document.createElement('th');
            let specialityStudent = document.createElement('th');
            let editDataStudent = document.createElement('th');
            let deleteDataAboutStudent = document.createElement('th');

            nameStudent.innerHTML = 'Имя студента';
            surnameStudent.innerHTML = 'Фамилия студента';
            lastNameStudent.innerHTML = 'Отчество студента';
            ageStudent.innerHTML = 'Возраст студента';
            specialityStudent.innerHTML = 'Специальность студента';
            editDataStudent.innerHTML = 'Редактирование';
            deleteDataAboutStudent.innerHTML = 'Удаление';

            tr.appendChild(nameStudent);
            tr.appendChild(surnameStudent);
            tr.appendChild(lastNameStudent);
            tr.appendChild(ageStudent);
            tr.appendChild(specialityStudent);
            tr.appendChild(editDataStudent);
            tr.appendChild(deleteDataAboutStudent);
            tableBody.appendChild(tr);
            for (let i = 0; i < xhr.response.listStudents.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.listStudents[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudents[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            document.getElementById('enterNameId__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('enterSurnameId__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('enterLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('enterAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('enterSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
                        button.onclick = () => {
                            document.getElementById('currentValueName__l6').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('currentValueSurname__l6').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('currentValueLastName__l6').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('currentValueAge__l6').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('currentSpeciality__l6').value = xhr.response.listStudents[i].speciality.toString();

                            let answer = confirm('Вы действительно хотите удалить данного студента?');
                            if (answer){
                                deleteStudent(document.getElementById('currentValueName__l6').value, document.getElementById('currentValueSurname__l6').value,
                                    document.getElementById('currentValueLastName__l6').value, document.getElementById('currentValueAge__l6').value,
                                    document.getElementById('currentSpeciality__l6').value)
                            }
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }
                }
                tableBody.appendChild(tr);
            }
        }else{
            document.getElementById('printError').innerHTML = 'Не удалось получить ответ с сервера';
        }
    }
}
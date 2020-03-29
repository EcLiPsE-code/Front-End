function createStudentRequest() {
    let dataJSON = JSON.stringify({
        'name' : document.getElementById('enterNameStudent').value,
        'surname' : document.getElementById('enterSurnameStudent').value,
        'lastName' : document.getElementById('enterSecondNameStudent').value,
        'age' : document.getElementById('enterAgeStudent').value,
        'speciality' : document.getElementById('enterSpecialityStudent').value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/create-student', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody_task2");
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

            for (let i = 0; i < xhr.response.listStudent.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.listStudent[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudent[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudent[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudent[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.listStudent[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('enterNameStudent').value = xhr.response.listStudent[i].name.toString();
                            document.getElementById('enterSurnameStudent').value = xhr.response.listStudent[i].surname.toString();
                            document.getElementById('enterSecondNameStudent').value = xhr.response.listStudent[i].lastName.toString();
                            document.getElementById('enterAgeStudent').value = xhr.response.listStudent[i].age.toString();
                            document.getElementById('enterSpecialityStudent').value = xhr.response.listStudent[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
                        button.onclick = () => {

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
function searchStudent() {
    let dataJSON = JSON.stringify({
       'surname' : document.getElementById('search').value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/search-student', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody_task2");
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

            for (let i = 0; i < 1; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.student.name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.student.surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.student.lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.student.age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.student.speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('enterNameStudent').value = xhr.response.student.name.toString();
                            document.getElementById('enterSurnameStudent').value = xhr.response.student.surname.toString();
                            document.getElementById('enterSecondNameStudent').value = xhr.response.student.lastName.toString();
                            document.getElementById('enterAgeStudent').value = xhr.response.student.age.toString();
                            document.getElementById('enterSpecialityStudent').value = xhr.response.student.speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
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
function filtrationStudentBySpeciality() {
    let dataJSON = JSON.stringify({
       'speciality' : document.getElementById('filter').value
    });
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/filter-student', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody_task2");
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

            for (let i = 0; i < xhr.response.students.length; i++) {
                let tr = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    if (j === 0){
                        let td = document.createElement("td");
                        td.innerHTML = xhr.response.students[i].name;
                        tr.appendChild(td);
                    }
                    else if (j === 1){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.students[i].surname;
                        tr.appendChild(td);
                    }
                    else if (j === 2){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.students[i].lastName;
                        tr.appendChild(td);
                    }
                    else if (j === 3){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.students[i].age;
                        tr.appendChild(td);
                    }
                    else if (j === 4){
                        let td = document.createElement('td');
                        td.innerHTML = xhr.response.students[i].speciality;
                        tr.appendChild(td);
                    }else if (j === 5){
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'РЕДАКТИРОВАТЬ';
                        button.onclick = () => {
                            document.getElementById('enterNameStudent').value = xhr.response.students[i].name.toString();
                            document.getElementById('enterSurnameStudent').value = xhr.response.students[i].surname.toString();
                            document.getElementById('enterSecondNameStudent').value = xhr.response.students[i].lastName.toString();
                            document.getElementById('enterAgeStudent').value = xhr.response.students[i].age.toString();
                            document.getElementById('enterSpecialityStudent').value = xhr.response.students[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
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
function updateTableByStudent() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/update-table-students', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200){
            let tableBody = document.getElementById("tableBody_task2");
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
                            document.getElementById('enterNameStudent').value = xhr.response.listStudents[i].name.toString();
                            document.getElementById('enterSurnameStudent').value = xhr.response.listStudents[i].surname.toString();
                            document.getElementById('enterSecondNameStudent').value = xhr.response.listStudents[i].lastName.toString();
                            document.getElementById('enterAgeStudent').value = xhr.response.listStudents[i].age.toString();
                            document.getElementById('enterSpecialityStudent').value = xhr.response.listStudents[i].speciality.toString();
                        };
                        td.appendChild(button);
                        tr.appendChild(td);
                    }else{
                        let td = document.createElement('td');
                        let button = document.createElement('input');
                        button.type = 'submit';
                        button.value = 'УДАЛИТЬ';
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
function updateStudent() {

}
function deleteStudent(name, surname, lastName, age, speciality) {
    let dataJSON = JSON.stringify({
       'name' : name,
       'surname' : surname,
       'lastName' : lastName,
       'age' : age,
       'speciality' : speciality
    });
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/api/student-delete', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(dataJSON);
    xhr.onload = () => {
        if (xhr.status === 200){

        }else{
            document.getElementById('printError').innerHTML = 'Не удалось получить ответ с сервера';
        }
    }
}
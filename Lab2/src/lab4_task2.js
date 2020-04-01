'use strict';

class Faculty{
    listStudents;
    constructor() {
        this.listStudents = [];
    }
    /*вывод студентов указанной специальности*/
    printStudentBySpeciality(nameSpeciality){
        let selectedStudents = [];
        this.listStudents.forEach(student => {
           if (student.speciality === nameSpeciality){
               selectedStudents.push(student);
           }
        });
        return selectedStudents;
    }

    updateInformationByStudent(currentStudent, newStudent){
        this.listStudents.forEach(student => {
            if (JSON.stringify(student) === currentStudent){
                let studentObject = student.toJSON();
                let newStudentObject = newStudent.toJSON();
                studentObject.name = newStudentObject.name;
                studentObject.surname = newStudentObject.surname;
                studentObject.lastName = newStudentObject.lastName;
                studentObject.age = newStudentObject.age;
                studentObject.speciality = newStudentObject.speciality;
            }
        });
        return this.listStudents;
    }

    /*поиск студента по фамилии*/
    searchStudent(surname){
        let foundStudents = [];
        let currentStudentIndex = this.listStudents.forEach(student => {
            if (student.surname.includes(surname)){
                foundStudents.push(student);
            }else if (surname.includes(student.surname)){
                foundStudents.push(student);
            }
        });
        return foundStudents;
    }
    deleteStudent(currentStudent){
        function equalsObject(student, currentStudent){
            let studentJSON = JSON.stringify({
                'currentStudent' : {
                    'currentName' : value.name,
                    'currentSurname' : value.surname,
                    'currentLastName' : value.lastName,
                    'currentAge' : value.age,
                    'currentSpeciality' : value.speciality
                }
            });
            return studentJSON === currentStudent;
        }
        return this.listStudents;
    }
}

class Student {
    name;
    surname;
    lastName;
    age;
    constructor(name, surname, age, lastName) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.lastName = lastName;
    }
    get getLastName(){
        return this.lastName;
    }
    get getSurname(){
        return this.surname;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    set setLastName(lastName){
        this.lastName = lastName;
    }
    set setSurname(surname){
        this.surname = surname;
    }
    set setName(name){
        this.name = name;
    }
    set setAge(age){
        if (age < 0){
            this.age = 18;
        }
        this.age = age;
    }
}

/*Информационные системы и технологии*/
class ConcreteSpecialityStudent extends Student{
    speciality;
    constructor(name, surname, age, speciality, lastName) {
        super(name, surname, age, lastName);
        this.speciality = speciality;
    }
    get getSpeciality(){
        return this.speciality;
    }
    toJSON() {
        return {
            'name' : this.name,
            'surname' : this.surname,
            'lastName' : this.lastName,
            'age' : this.age,
            'speciality' : this.speciality,
        }
    }
}

let faculty = new Faculty();
class Controller {
    createStudent(name, surname, age, speciality, lastName){
        let student = new ConcreteSpecialityStudent(name, surname, age, speciality, lastName);
        faculty.listStudents.push(student.toJSON());
        return faculty.listStudents;
    }
    searchStudent(surname){
        return faculty.searchStudent(surname);
    }
    filterSpeciality(nameSpeciality){
        return faculty.printStudentBySpeciality(nameSpeciality);
    }
    updateTable(){
        return faculty.listStudents;
    }
    updateDataByStudent(student, newStudent){
        return faculty.updateInformationByStudent(student, newStudent);
    }
    deleteStudent(currentStudent){
        return faculty.deleteStudent(currentStudent);
    }
}

module.exports.Controller = Controller;
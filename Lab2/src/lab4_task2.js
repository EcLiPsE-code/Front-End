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

    updateInformationByStudent(name, surname, lastName, age, speciality){
        let newStudent = new ConcreteSpecialityStudent(name, surname, age, speciality, lastName);
        this.listStudents.forEach(student => {

        })
    }

    /*поиск студента по фамилии*/
    searchStudent(surname){
        let currentStudentIndex = this.listStudents.findIndex(student => student.surname === surname);
        let currentStudent;
        if (currentStudentIndex !== -1){
            currentStudent = this.listStudents[currentStudentIndex];
        }else{
            return 0;
        }
        return currentStudent;
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
    set setSpeciality(recordNumber){
        this.recordNumber = recordNumber;
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
}

module.exports.Controller = Controller;
/*
класс, описывающий студента
 */
class Student{
    name;
    surname;
    lastName;
    faculty;
    speciality;
    listDisciplines; /*список дисциплин*/
    constructor(name, surname, lastName, faculty, speciality) {
        this.name = name;
        this.surname = surname;
        this.lastName = lastName;
        this.faculty = faculty;
        this.speciality = speciality;
        this.listDisciplines = [];
    }
}
/*
класс, описывающий дисциплину
 */
class Discipline{
    nameDiscipline;
    listOfLaboratoryWork;
    constructor(nameDiscipline) {
        this.nameDiscipline = nameDiscipline;
    }
}

/*
класс, описывающий лабораторную работу
 */
class LaboratoryWork {

}
import {StudentType} from "../02/02";
import {addSkill, doesLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dimich",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surgsnova 2",
            city: {
                title: "Minsk",
                CountryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            }, {
                id: 2,
                title: "CSS"
            }, {
                id: 3,
                title: "React"
            },
        ]
    }
})

test("new tech skill should be added to student",
    () => {

        expect(student.isActive).toBe(false);
        makeStudentActive(student);
        expect(student.isActive).toBe(true);



    })



test("does student lives in city?",
    () => {

        let result1 = doesLiveIn(student, "Moskov");
        let result2 = doesLiveIn(student, "Minsk");
        expect(result1).toBe(false);
        expect(result2).toBe(true);


    })




























test("student should be made active",
    () => {

        expect(student.technologies.length).toBe(3);
        addSkill(student, "JS");
        expect(student.technologies.length).toBe(4);
        expect(student.technologies[3].title).toBe("JS");
        expect(student.technologies[3].id).toBeDefined();


    })
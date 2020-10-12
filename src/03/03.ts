import {student, StudentType} from "../02/02";
import {CityType, govermentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {

    return a + b

}

export function sum2(a: number, b: number) {

    return a + b

}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: govermentBuildingsType, bud: number) => {
    debugger
    building.budget += bud
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export function toFireStaff(building: govermentBuildingsType, num: number) {
    building.staffCount -= num
}

export const toHireStaff = (building: govermentBuildingsType, num: number) =>{
    building.staffCount += num
}

export function createMessage(props: CityType) {
// return "Hello " + props.title + " citizens. I want you to be happy. All "+ props.citizensNumber + " man"
return `Hello ${props.title} citizens. I want you to be happy. All ${props.citizensNumber} man`
}
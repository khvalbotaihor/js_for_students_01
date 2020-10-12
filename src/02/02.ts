
export type LocalCityType = {
    title: string
    CountryTitle: string
}
 type AddressType = {
     streetTitle: string
     city: LocalCityType
 }

 type TechType = {
    id:number
     title: string
 }
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


// литерал обєкта
export const student:StudentType = {
    id:1,
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


console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);


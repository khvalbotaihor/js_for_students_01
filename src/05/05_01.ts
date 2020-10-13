export type ManType = {
    name: string,
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Aleksandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},

]

const dimichTransformator = (man: ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1],

})

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    }, {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Aleksandr",
        lastName: "Petrov"
    }, {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    },
]

let d1 = dimichTransformator(people[0]);
let d2 = dimichTransformator(people[0]);
let d3 = dimichTransformator(people[0]);

const dev2 = [
    dimichTransformator(people[0]),
    dimichTransformator(people[0]),
    dimichTransformator(people[0]),
]

const dev3 = people.map(dimichTransformator);

const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split("")[0],
    lastName: man.name.split("")[1],

}));

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator `)

export const createGreetingMessage = (people: Array<ManType>) =>{
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}
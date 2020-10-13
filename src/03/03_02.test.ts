import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city:CityType;

beforeEach(()=>{
    city = {
        title: "New York",
        houses:[
            {
                id: 1,
                buildedAt:2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },{
            id:2,
                buildedAt:2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },{
            id:3,
                buildedAt:2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
            ],
        govermentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        },
            {
            type: "FIRE-STATION",
            budget:500000,
            staffCount: 1000,
            address: {
                street: {
                    title: "South Str"
                }
            }
        }],
        citizensNumber: 1000000
    }
})

test("Budget should be changed for HOSPITAL", ()=>{
    addMoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000)

})

test("Budget should be changed for FIRE-STATION", ()=>{
    addMoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000)

})

/*
test("houses should be destroyed", ()=>{
    demolishHouseOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})*/

test("houses should be repaired", ()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})


test("staff should be increased", ()=>{
    toFireStaff(city.govermentBuildings[0], 20);

    expect(city.govermentBuildings[0].staffCount).toBe(180);
})
test("shouse should be repaired", ()=>{
    toHireStaff(city.govermentBuildings[0], 20);
    toHireStaff(city.govermentBuildings[1], 100);

    expect(city.govermentBuildings[0].staffCount).toBe(220);
    expect(city.govermentBuildings[1].staffCount).toBe(1100);
})


test("Getting message should be correct for city", ()=>{


    expect(createMessage(city)).toBe("Hello New York citizens. I want you to be happy. All 1000000 man");
})

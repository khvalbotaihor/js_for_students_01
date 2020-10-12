
export type StreetType ={
    title: string
}
export type AddressTYpe ={
    number?: number
    street : StreetType
}


export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressTYpe

}

export type govermentBuildingsType = {
type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressTYpe


}
export type CityType = {
    title: string,
    houses: Array<HouseType>,
    govermentBuildings: Array<govermentBuildingsType>
    citizensNumber: number
}
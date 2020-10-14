import React, {useState} from "react";
import compileStreaming = WebAssembly.compileStreaming;

type lessonType = {
    title: string
    name?: string
}

type addressTitlePropsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<lessonType>
    address:
        {
            street:
                addressTitlePropsType
        }
}

type PropsType = {
    title: string,
    man: ManType,
    food: Array<string>,
    car: {
        title: string,
        model: string
    }
}


function useDimichState(m:string) {

    return [m, function () {}]
}
function useDimichState2(m:string) {

    return {message:m, setMessage: function () {}}
}


export const ManComponent: React.FC<PropsType> = (props) => {

    //const {title, man} = props
    //const {title, man, ...rest} = props

    const [message, setMessage]= useState("Hello");

    const {title, ...rest} = props

    const restProps2 = {
        food: props.food,
        car: props.car
    }

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {rest.car.model}
        </div>
    </div>

}


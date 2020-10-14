import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        const a = event.currentTarget.value
        alert("User should be deleted" + a)
    }
    const saveUser = () => {
        alert("User should be saved")
        /*        doctor.help();
                teacher.learn();*/
    }

    const onNameChanged = () => {
        console.log("Name changed")

    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const a = event.currentTarget.value
        console.log("Age changed "
        +a)

    }
    const focusLostHandler = () => {
        console.log("focus lost")

    }


    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimich</textarea>
        <input             onChange={onAgeChanged} type="number"
        />
        <button name={"delete"} tabIndex={1} onClick={search}>search</button>


    </div>


}
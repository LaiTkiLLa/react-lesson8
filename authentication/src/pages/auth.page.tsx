import React from "react";
import {InputUi} from "../ui/input.ui";
import {ButtonUi} from "../ui/button.ui";

const styles = {
    display: "flex",
    height: "100px",
    alignItems: "center"
}

export const Auth: React.FC<{ auth: { login: string, password: string }, handleAuth: any, setAuth: any }> = ({
                                                                                                                 auth,
                                                                                                                 handleAuth,
                                                                                                                 setAuth
                                                                                                             }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setAuth((prevAuth: any) => ({
            ...prevAuth,
            [name]: value
        }))
    }

    return (
        <form style={styles}>
            <InputUi type='text' name="login" style={{height: "20px"}} placeholder='Username' value={auth.login}
                     onChange={handleChange}/>
            <InputUi type='text' name="password" style={{height: "20px"}} placeholder='Password'
                     value={auth.password} onChange={handleChange}/>
            <ButtonUi style={{
                height: "30px",
                width: "100px",
                background: "none",
                color: "green",
                border: "2px green solid"
            }} type="submit" onClick={handleAuth}>
                Login
            </ButtonUi>
        </form>
    )
}
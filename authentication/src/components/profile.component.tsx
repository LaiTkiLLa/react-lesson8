import React from "react";
import {ButtonUi} from "../ui/button.ui";


const styles = {
    display: "flex",
    height: "100px",
    alignItems: "center"
}

const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('login')
    window.location.reload()
}

export const Profile: React.FC<{login: string}> = ({login}) => {
    return (
        <div style={styles}>
            <div style={{marginRight: "50px"}}>Hello {login}</div>
            <ButtonUi style={{background: "none", border: "2px red solid", width: "100px", height: "50px", color: "red"}} onClick={handleLogout}>
                Logout
            </ButtonUi>
        </div>
    )
}
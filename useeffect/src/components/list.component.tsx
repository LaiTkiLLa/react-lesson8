import React, {useEffect, useState} from "react";
import {getFetch} from "../fetch/get.fetch";
import {Data, User} from "../types/data.type";


const styles = {
    marginBottom: "10px",
    border: "2px black solid",
    width: "200px"
}

const userStyles = {
    border: "2px black solid",
    width: "300px",
}

export const List: React.FC = () => {
    const [list, setList] = useState<Data[]>([])
    const [user, setUser] = useState<User>()
    useEffect(() => {
        (async () => {
            setList(await getFetch('users.json'))
        })()
    })
    const getUser = async (id: number) => {
        if (user && id === user.id) {
            return
        } else {
            setUser(await getFetch(`${id}.json`))
        }
    }
    return (
        <div>
            {list.map((item) => (
                <div key={item.id} style={styles} onClick={() => getUser(item.id)}>{item.name}</div>
            ))}
            {user
                ? <div>
                    <div style={userStyles}><img src={user.avatar} alt="Аватарка пользователя"/></div>
                    <div style={userStyles}>City: {user.details?.city}</div>
                    <div style={userStyles}>Company: {user.details?.company}</div>
                    <div style={userStyles}>Position: {user.details?.position}</div>
                </div>
                : <div style={{...userStyles, backgroundColor: 'green'}}>Выберите пользователя</div>}
        </div>
    )
}
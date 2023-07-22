import React, {useState} from "react";
import {User} from "../types/data.type";
import {getFetch} from "../fetch/get.fetch";

export const Details: React.FC<{id: number, onClick: () => void}> = ({id, onClick}) => {

    const [user, setUser] = useState<User>({})



    return (
        <div>
            {user.name}
        </div>
    )
}
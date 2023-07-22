import React from "react";
import {UseJsonFetchHook} from "../hooks/use-json-fetch.hook";

export const Data: React.FC = () => {

    const {status} = UseJsonFetchHook({url: 'data', opts: {method: "GET"}})

    return (
        <div>{status}</div>
    )
}
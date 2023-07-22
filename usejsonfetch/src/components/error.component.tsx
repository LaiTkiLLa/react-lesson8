import React from "react";
import {UseJsonFetchHook} from "../hooks/use-json-fetch.hook";

export const Error: React.FC = () => {

    const {status} = UseJsonFetchHook({url: 'error', opts: {method: "GET"}})
    return (
        <div>{status}</div>
    )
}
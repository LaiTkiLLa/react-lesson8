import React from "react";
import {UseJsonFetchHook} from "../hooks/use-json-fetch.hook";

export const Loading: React.FC = () => {

    const {status} = UseJsonFetchHook({url: 'loading', opts: {method: "GET"}})

    return (
        <div>Loading</div>
    )
}
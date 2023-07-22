import {useEffect, useState} from "react";
import {getFetch} from "../fetch/get.fetch";

export const UseJsonFetchHook = ({url, opts}: {url: string, opts: {method: string}}) => {
    const [data, setData] = useState<{status?: string}>({})
    useEffect(() => {
        (async () => {
            setData(await getFetch(url, opts))
        })()
    })
    return data
}
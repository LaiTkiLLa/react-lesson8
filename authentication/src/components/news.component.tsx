import React, {useEffect, useState} from "react";
import {getFetch} from "../fetch/get.fetch";

type News = {
    id: string,
    title: string,
    image: string,
    content: string
}

const styles = {
    width: "500px",
    border: "2px black solid",
    height: "500px",
    margin: "0 auto",
    marginTop: "20px"
}

export const News: React.FC<{ token: string }> = ({token}) => {
    const [news, setNews] = useState<News[]>()

    useEffect(() => {
        (async () => {
            const res = await getFetch('news', token)
            setNews(await res)
        })()
    }, [])

    return (
        <div style={{ width: "1200px", margin: "0 auto", marginTop: "50px", display: "flex", flexWrap: "wrap"}}>
            {news?.map(item => (
                <div key={item.id} style={styles}>
                    <div style={{}}><img src={item.image} alt="Изображение"/></div>
                    <div>{item.title}</div>
                    <div>{item.content}</div>
                </div>

            ))}
        </div>
    )
}
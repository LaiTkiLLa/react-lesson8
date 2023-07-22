import React, {useEffect, useState} from 'react';
import './App.css';
import {postFetch} from "./fetch/post.fetch";
import {Profile} from "./components/profile.component";
import {News} from "./components/news.component";
import {Auth} from './pages/auth.page';

function App() {

    type Auth = {
        login: string,
        password: string,
        token: string
    }

    const [auth, setAuth] = useState<Auth>({
        login: "",
        password: "",
        token: ""
    })


    const handleAuth = async (e: any) => {
        e.preventDefault()
        const res = await postFetch(auth)
        if (res.status === 200) {
            const {token} = await res.json()
            setAuth({...auth, token})
            localStorage.setItem('token', token)
            localStorage.setItem('login', auth.login)

        } else return
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const login = localStorage.getItem('login')
        if (token) {
            // @ts-ignore
            setAuth({...auth, login, token})
        }
    }, [])


    return (
        <div className="App">
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                background: "lightgray"
            }}>
                <div style={{marginRight: "100px"}}>Neto Social</div>
                {auth.token
                    ?
                    <Profile login={auth.login}/>
                    : <Auth auth={auth} handleAuth={handleAuth} setAuth={setAuth}/>}
            </div>
            {auth.token ? <News token={auth.token}/> : null}
        </div>
    );
}

export default App;

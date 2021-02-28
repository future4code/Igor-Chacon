import React, { useState } from 'react'
import axios from 'axios'
import {BASE_URL} from  '../../Constants/urls'

const CardNewPost = () => {

    const [novoPost, setNovoPost] = useState('')
    const [novoPosTitle, setNovoPostTitle] = useState('')

    const setNewPost = () => {
        const body = {
            text: novoPost,
            title: novoPosTitle
        }
        axios
            .post(
                `${BASE_URL}/posts`,
                body,
                {
                    headers: {
                        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2SjQyTWhjWHF3UUNBZWRQMkJHIiwiZW1haWwiOiJpZ29ydmNoYWNvbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imlnb3JjaGFjb24iLCJpYXQiOjE2MTQwMjY3Nzh9.T1SuUd1fa8Z2XagNvT1qUDkiblarOQ2YAlTt2D5Ivl0"
                    }
                }
                )
            .then((res) => {
                setNovoPost('')
                setNovoPostTitle('')
            })
            .catch((err) => {
                console.log(err.message)
                alert("Erro!")
            })
    }

    const newTitleHandle = (e) => {
        setNovoPostTitle(e.target.event)
    }

    const newMsgHandle = (e) => {
        setNovoPost(e.target.event)
    }

    return (
        <>
            <form>
                Título da mensagem:
                <br />
                <input type="text" required id="titulo" value={novoPosTitle} onChange={newTitleHandle}/>
                <br />
                Mensagem:
                <br />
                <input type="text" required id="mensagem" value={novoPost} onChange={newMsgHandle}/>
                <br />
                <button onClick={setNewPost}>Enviar Mensagem</button>
            </form>
        </>
    )
}

export default CardNewPost;
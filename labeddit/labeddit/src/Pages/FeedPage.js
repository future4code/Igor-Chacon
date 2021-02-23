import React from 'react'
import { useEffect, useState } from "react";
import { BASE_URL } from '../Constants/urls'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { goToLoginPage } from '../Routers/Conductor'

const FeedPage = () => {

    const history = useHistory();

    const [posts, setPosts] = useState([])
    const [textoPosts, setTextoPosts] = useState([])

    const getPosts = () => {
        axios
            .get(
                `${BASE_URL}/posts`,
                {
                    headers: {
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2SjQyTWhjWHF3UUNBZWRQMkJHIiwiZW1haWwiOiJpZ29ydmNoYWNvbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imlnb3JjaGFjb24iLCJpYXQiOjE2MTQwMjY3Nzh9.T1SuUd1fa8Z2XagNvT1qUDkiblarOQ2YAlTt2D5Ivl0` 
                    }
                }
                )
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => {
                console.log(err.message)
                alert("Erro!")
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            Feed
            {posts.map((item) => {
                return (
                <div> {item.username} disse:
                    <div>
                        {item.text}
                    </div>
                    <br />
                 </div>
                )
            })}
        </div>
    )
}

export default FeedPage
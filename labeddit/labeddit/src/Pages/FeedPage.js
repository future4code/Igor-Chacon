import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { BASE_URL } from '../Constants/urls';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToDetalhesPostPage } from '../Routers/Conductor';
import CardNewPost from '../Components/CardNewPost/CardNewPost';
import CardPost from '../Components/CardPost/CardPost';
import GlobalStateContext from '../Global/GlobalStateContext';
import { useProtectedPage } from '../hooks/useProtectedPage'

const FeedPage = () => {

    document.title = "LabEddit"

    const history = useHistory();
    useProtectedPage();
    

    const token = localStorage.getItem("token");

    const [isLoading, setIsloading] = useState(false);

    // const { posts } = useContext(GlobalStateContext)

    const StyleCardNewPost = styled.div`
        border: solid 1px black;
        padding: 2%;
        text-align: center;
        display: grid;
        margin: 2%;
    `

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        setIsloading(true);
        axios
            .get(
                `${BASE_URL}/posts`,
                {
                    headers: {
                    'Authorization': `${token}` 
                    }
                }
            )
            .then((res) => {
                setPosts(res.data.posts)
                setIsloading(false);
            })
            .catch((err) => {
                console.log(err.message)
                alert("Erro em GetPosts!")
            })
    }

    const votePostMais = (id) => {
        const body = {
            direction: 1
        }
        axios
            .put(
                `${BASE_URL}/posts/${id}/vote`,
                body,
                {
                    headers: {
                        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2SjQyTWhjWHF3UUNBZWRQMkJHIiwiZW1haWwiOiJpZ29ydmNoYWNvbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imlnb3JjaGFjb24iLCJpYXQiOjE2MTQwMjY3Nzh9.T1SuUd1fa8Z2XagNvT1qUDkiblarOQ2YAlTt2D5Ivl0"
                    }
                }
            )
            .then((res) => {
                alert("voto computado")
            })
            .catch((err) => {
                alert("erro ao votar mais!")
                console.log(err.message)
                console.log(err)
            })
    }

    const votePostMenos = (id) => {
        const body = {
            direction: 0
        }
        axios
            .put(
                `${BASE_URL}/posts/${id}/vote`,
                body,
                {
                    headers: {
                        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2SjQyTWhjWHF3UUNBZWRQMkJHIiwiZW1haWwiOiJpZ29ydmNoYWNvbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imlnb3JjaGFjb24iLCJpYXQiOjE2MTQwMjY3Nzh9.T1SuUd1fa8Z2XagNvT1qUDkiblarOQ2YAlTt2D5Ivl0"
                    }
                }
            )
            .then((res) => {
                alert("voto computado")
            })
            .catch((err) => {
                alert("erro ao votar menos!")
                console.log(err.message)
                console.log(id)
            })
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            
            <button onClick={() => goToLoginPage(history)} onClick={() => localStorage.setItem("token", '')}>Sair</button>
            <StyleCardNewPost>
                Nova mensagem:
                <CardNewPost />
            </StyleCardNewPost>
            
            <h1>Mensagens:</h1>

            {isLoading && <h2>Carregando mensagens...</h2>}

            {posts.map((post) => {
                return (
                    <CardPost key={post.id} post={post}/>
                )
            })}
        </div>
    )
}

export default FeedPage


    
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/urls.js'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../Global/GlobalStateContext.js';
import { useParams } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components';

const DetalhesPostPage = () => {

    const history = useHistory();
    useProtectedPage();
    const token = localStorage.getItem("token");

    const [selectedPost, setSelectedPost] = useState({});
    const [posts, setPosts] = useState([])
    // const { posts } = useContext(GlobalStateContext)
    const { id } = useParams();

    const StyleCardDetails = styled.div`
        border: solid 1px black;
        padding: 2%;
        text-align: center;
        display: grid;
        margin: 2%;
    `
    

    const getPostsDetalhes = (id) => {
        axios
            .get(
                `${BASE_URL}/posts/${id}`,
                {
                    headers: {
                    'Authorization': `${token}` 
                    }
                }
                )
            .then((response) => {
                setSelectedPost(response.data.post)
                console.log("setSelectedPost rodou")
                console.log(selectedPost.userVoteDirection)
            })
            .catch((error) => {
                console.log(error.message)
                alert("Erro!")
            })
    }

    useEffect(() => {
        getPostsDetalhes();
    }, [setSelectedPost])

    return (
        <StyleCardDetails>
            {selectedPost?.post?.map((item) => {
                return (
                    <div key={item?.id}>
                        {console.log(item.id)}
                        <p>{item?.id}</p>
                    </div>
                )
            })}
        </StyleCardDetails>
    )
}

export default DetalhesPostPage;
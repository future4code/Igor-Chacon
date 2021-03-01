import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/urls.js'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../Global/GlobalStateContext.js';
import { useParams } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components';
import CardPost from '../Components/CardPost/CardPost.js'

const DetalhesPostPage = () => {

    const history = useHistory();
    useProtectedPage();
    const token = localStorage.getItem("token");

    const [selectedPost, setSelectedPost] = useState({});
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    const params = useParams();
    console.log(params.id)

    const StyleCardDetails = styled.div`
        border: solid 1px black;
        padding: 2%;
        text-align: center;
        display: grid;
        margin: 2%;
    `
    

    const getPostsDetalhes = () => {
        axios
            .get(
                `${BASE_URL}/posts/${params.id}`,
                {
                    headers: {
                    'Authorization': `${token}` 
                    }
                }
                )
            .then((response) => {
                setSelectedPost(response.data.post)
                setPostDetails(true)
            })
            .catch((error) => {
                console.log(error.message)
                alert("Erro ao get detalhes!")
            })
    }

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            history.push('/login')
        } else if(!params.id) {
            history.push('/feed')
        }
    }, []);

    useEffect(() => {
        getPostsDetalhes();
    }, [setSelectedPost])

    return (
        <div>
            {postDetails && <CardPost post={selectedPost}/>}
            {/* lista de comentarios */}
        </div>
    )
}

export default DetalhesPostPage;
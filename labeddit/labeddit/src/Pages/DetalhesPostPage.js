import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/urls.js'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProtectedPage } from '../hooks/useProtectedPage'
import styled from 'styled-components';
import CardPost from '../Components/CardPost/CardPost.js'
import { goBack } from '../Routers/Conductor';
import CommentListItem from '../Components/CommentListItem/CommentListItem.js'

const DetalhesPostPage = () => {

    const history = useHistory();
    useProtectedPage();
    const token = localStorage.getItem("token");

    const [selectedPost, setSelectedPost] = useState({});
    const [newComment, setNewComment] = useState('');
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

    const handleUpdateComment = (e) => {
        setNewComment(e.target.value)
    }

    const handleCreateComment = async () => {
        const axiosConfig = {
            headers: {
                Authorization: token
            }
        }

        const body = {
            text: newComment
        }
        try { 
        await axios
            .post(
                `${BASE_URL}/posts/${params.id}/comment`, body, axiosConfig
            )

            setNewComment('');
            getPostsDetalhes();
        } catch (error) {
            alert('não foi possível comentar');
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={() => goBack(history)}>Voltar</button>
            {postDetails && <CardPost post={selectedPost} hideComment />}
            <div>
                <input 
                    placeholder={'seu comentário'}
                    value={newComment}
                    onChange={handleUpdateComment}
                />
                <button onClick={handleCreateComment}>Enviar Comentário</button>
            </div>
            
            <StyleCardDetails>
                <h2>Comentários:</h2>
                {postDetails && selectedPost.comments.map((comment) => {
                    return (
                        <CommentListItem comment={comment}/>
                    )
                })}
            </StyleCardDetails>
            
        </div>
    )
}

export default DetalhesPostPage;
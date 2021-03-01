import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL } from '../../Constants/urls.js';

const CardPost = (props) => {
    const history = useHistory();

    const token = localStorage.getItem("token");

    const StyleCardPost = styled.div`
    border: solid 1px black;
    padding: 2%;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr 0.5fr;
    margin: 2%;
`

const handleGoToPostDetail = () => {
    history.push(`/detalhes/${props.post.id}`)
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
                    "Authorization": `${token}`
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
};

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
                    "Authorization": `${token}`
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
};

    return (
        <>
            <StyleCardPost>
                 <div>
                    <button onClick={() => votePostMais(props.post.id)}>↑</button>
                    <div>{props.post.votesCount}</div>
                    <button onClick={() => votePostMenos(props.post.id)}>↓</button>
                </div>

                <div>
                    <h4>{props.post.username} disse:</h4> 
                    <br />
                    <h3>{props.post.title}</h3>
                    <br />
                    {props.post.text}
                    <br />
                </div>
                    
                <div> 
                    Comentários: {props.post.commentsCount} 
                    <button onClick={handleGoToPostDetail}>Comentar</button>
                </div>
            </StyleCardPost>
        </>
    )
}

export default CardPost;


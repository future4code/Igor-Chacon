import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const CardPost = (props) => {
    const history = useHistory();

    const StyleCardPost = styled.div`
    border: solid 1px black;
    padding: 2%;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr 0.5fr;
    margin: 2%;
`

    return (
        <>
            <StyleCardPost>
                 <div>
                    <button>↑</button>
                    <div>{props.post.votesCount}</div>
                    <button>↓</button>
                </div>
                {props.post.username} disse:
                <br />
                {props.post.title}
                <br />
                {props.post.text}
                <br />
                <div> 
                    Comentários: {props.post.commentsCount} 
                    <button>Comentar</button>
                </div>
            </StyleCardPost>
        </>
    )
}

export default CardPost;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../Constants/urls';
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [postIds, setPostIds] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState([]);

    

    useEffect(() => {
        getPostsIds();
    });

    useEffect(() => {
        const newList = [];

        postIds.forEach((item) => {
            axios
                .get(item.url)
                .then((response) => {
                    newList.push(response.data);
                    setPosts(newList);
                })
                .catch((error) => console.log(error.message));
        })
    }, [postIds]);

    const getPostsIds = () => {
        axios
            .get(
                `${BASE_URL}/posts`,
                {
                    headers: {
                    'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA2SjQyTWhjWHF3UUNBZWRQMkJHIiwiZW1haWwiOiJpZ29ydmNoYWNvbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imlnb3JjaGFjb24iLCJpYXQiOjE2MTQwMjY3Nzh9.T1SuUd1fa8Z2XagNvT1qUDkiblarOQ2YAlTt2D5Ivl0` 
                    }
                }
            )
            .then((response) => {
                setPostIds(response.data.results);
            })
            .catch((error) => console.log(error.message));
    }

    const data = {
        posts,
        setPosts,
        postDetails, 
        setPostDetails
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState;
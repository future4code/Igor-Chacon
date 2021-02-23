import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../Constants/urls'

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios
            .get(`${BASE_URL}/posts`)
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => {
                console.log(err.message)
                alert("Erro!")
            })
    }

}

export default GlobalState
import { useState } from "react";
import { useParams } from "react-router-dom"

function DetailMovie(){
    const {id} = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState("");

    async function fetchDetailMovie(){
        
    }
}
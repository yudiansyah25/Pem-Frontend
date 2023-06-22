import { useParams } from "react-router-dom";

function Detail(){
    const params = useParams();

    console.log("## params", params);
    return <h2>Halaman Detail: (params.id)</h2>;
} 

export default Detail;
import React from "react";
import { useParams } from 'react-router-dom'
import Form from "./Form";

const NewBeach = () => {
    const { id } = useParams

    return(
        <div>
            <Form/>
        </div>
    );
}


export default NewBeach;
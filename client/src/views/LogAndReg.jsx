import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function BeautifulPeople(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState(null);



    const handleCreateSubmitButton = (event) => {
        event.preventDefault();

        const newBlog = {
            name: name,
            description: description
        };

        axios.post('http://localhost:8000/api/blog/new', newBlog)
            .then(response => {
                console.log(response.data);
                navigate("/")
            })

            .catch((error) => {
                setValidationErrors(error?.response?.data?.errors);
                console.log(error);
            })
    }







    return (

        <div>


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h1>Note</h1>
                <a href='/'>Go back to Home</a>

            </div>
            <hr></hr>

            <form onSubmit={(event) => { handleCreateSubmitButton(event) }}>

                <p>Blog Name:</p>
                <input type="text" value={name}
                    onChange={(event) => { setName(event.target.value); }}></input>

                <p>Blog Dexcription</p>
                <textarea type="text" value={description}
                    onChange={(event) => { setDescription(event.target.value); }}></textarea>


                <br />

                <input type="submit" />
            </form>
        </div>


    )


}

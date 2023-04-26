import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function BeautifulPeople(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sports, setSports] = useState(false);
    const [inspiration, setInspiration] = useState(false);
    const [beauty, setBeauty] = useState(false);
    const [book, setBook] = useState(false);
    const [coding, setCoding] = useState(false);
    const [fashion, setFashion] = useState(false);
    const [gym, setGym] = useState(false);



    const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState(null);



    const handleCreateSubmitButton = (event) => {
        event.preventDefault();

        const newBlog = {
            name: name,
            description: description,
            sports: sports,
            inspiration: inspiration,
            beauty: beauty,
            book: book,
            coding: coding,
            fashion: fashion,
            gym: gym,
        };

        axios.post('http://localhost:8000/api/blog', newBlog)
            .then(response => {
                console.log(response.data);
                navigate("/beautypost")
            })

            .catch((error) => {
                setValidationErrors(error?.response?.data?.errors);
                console.log(error);
            })
    }

    return (

        <div>


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h1>Beautiful Create Post</h1>
                <a href='/'>Go back to Home</a>

            </div>
            <hr></hr>

            <form onSubmit={(event) => { handleCreateSubmitButton(event) }}>

                <p>Blog Name:</p>
                <input type="text" value={name}
                    onChange={(event) => { setName(event.target.value); }}></input>

                <p>Blog Description</p>
                <textarea type="text" value={description}
                    onChange={(event) => { setDescription(event.target.value); }}></textarea>


                <br />


                <div id="blog" class="check_list">
                    <span class="category">Select Category:</span>
                    <ul class="items">
                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setSports(event.target.checked);
                            }}
                        />Sports </li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setInspiration(event.target.checked);
                            }}
                        />Inspiration</li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setBeauty(event.target.checked);
                            }}
                        />Beauty </li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setBook(event.target.checked);
                            }}
                        />Book </li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setCoding(event.target.checked);
                            }}
                        />coding </li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setFashion(event.target.checked);
                            }}
                        />fashion </li>

                        <li><input
                            type="checkbox"
                            onChange={(event) => {
                                setGym(event.target.checked);
                            }}
                        />gym </li>
                    </ul>
                </div>

                <input type="submit" />

            </form>
        </div>


    )


}

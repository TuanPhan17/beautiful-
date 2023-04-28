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

        <div className='min-h-screen  bg-blue-300'>


            <div className='align-center'><h1>Beautiful Create Post</h1></div>
            <hr></hr>

            <form className='grid  place-items-center' onSubmit={(event) => { handleCreateSubmitButton(event) }}>

                <p>Blog Name:</p>
                <input className="appearance-none block  bg-gray-200 text-gray-700 border border-red-500 rounded  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={name}
                    onChange={(event) => { setName(event.target.value); }}></input>

                <p>Blog Description: </p>
                <textarea  className=" bg-gray-200"type="text" value={description}
                    onChange={(event) => { setDescription(event.target.value); }}></textarea>


                <br />


                <div id="blog" className="check_list">
                    <span className="category">Select Category:</span>
                    <ul className="items">
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

                <input  className="bg-purple-300 rounded-full w-20" type="submit" />

            </form>
        </div>


    )


}

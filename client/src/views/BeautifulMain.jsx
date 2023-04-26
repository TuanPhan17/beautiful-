import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import bullseye from '../img/bullseye.png'

import {container,Row,column,text,img,  } from 'react-bootstrap'

import axios from 'axios';

export default function BeautifulPeople(props) {
    const [blogs, setBlogs] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/blog')
    .then(response => {
        console.log(response.data);
        setBlogs(response.data);
    })
    .catch((error) => {console.log(error);
    })
}, []);


    return (
        <container>
            <div>
                <h1 className='text-center'>Beautiful People</h1>

                <img src={bullseye} className='App-logo mx-auto d-block w-25 h-25' alt="logo" />
                    <div key = {blogs.blog}/>
                <div className='row text-center'>
                    <p className='col fw-bold'>Sports</p>
                    <p className='col fw-bold'>Inspiration</p>
                    <p className='col fw-bold'>Beauty</p>
                </div>
            </div>
        </container>
    );
}

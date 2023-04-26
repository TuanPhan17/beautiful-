import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Row, Form, Alert, Card } from 'react-bootstrap'





export default function BeautifulPeople(props) {

    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blog')
            .then(response => {
                console.log(response.data);
                setBlogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);






    return (
        <div>
            <p>heii</p>

            <Container>

                <div>
                    {blog.map((blog) => {
                        return (
                            <div key={blog._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <div>
                                    <h2>{blog.name}</h2>
                                    <p>{blog.description}</p>
                                    <p>{blog.sports == true && ("sports")}</p>
                                    <p>{blog.inspiration == true && ('inspriation')}</p>
                                    <p>{blog.beauty == true && ('beauty')}</p>

                                </div>

                                {/* <button onClick={(event) => { handleDeleteNoteButton(note._id); }}>
                                Delete
                            </button> */}
                                <Button className='bg-black'>test button</Button>
                            </div>
                        );
                    })}

                </div>

            </Container>
        </div>


    )


}

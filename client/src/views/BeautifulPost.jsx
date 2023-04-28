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
                setBlogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div style={{
            backgroundImage: 'url(/img/test.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'

        }}>
            <Row style={{ display: 'flex', justifyItems: 'center', marginTop: '40px' }} >
                <img src=''></img>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', marginTop: '40px' }} >
                    {blog.map((blog) => {
                        return (
                            <div key={blog._id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>

                                <Card style={{ width: '500px', }}>

                                    <h2>{blog.name}</h2>
                                    <p>{blog.description}</p>
                                    <Card.Footer style={{ display: 'flex', gap: '20px' }}>
                                        <p>{blog.sports == true && ("sports")}</p>
                                        <p>{blog.inspiration == true && ('inspriation')}</p>
                                        <p>{blog.beauty == true && ('beauty')}</p>
                                        <p>{blog.book == true && ('book')}</p>
                                        <p>{blog.coding == true && ('coding')}</p>
                                        <p>{blog.fashion == true && ('fashion')}</p>
                                        <p>{blog.gym == true && ('gym')}</p>
                                    </Card.Footer>
                                </Card>
                            </div>
                        );
                    })}

                </div>

            </Row>
        </div>


    )


}

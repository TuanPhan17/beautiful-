import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';


export default function ShowAllProductView(props) {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    const [validationErrors, setValidationErrors] = useState(null);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewAuthorSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            email: email,
            password: password,
            username: username,
            confirmPassword: confirmPassword,
        };


        // creating New USER---------------
        axios
            .post('http://localhost:8000/api/users', newUser)
            .then((res) => {
                navigate('/');
                console.log(res.data);
            })
            .catch((error) => {
                setValidationErrors(error?.response?.data?.errors);
                console.log(error);
            });


    }

    return (
        <div className='d-flex justify-between m-5' >

            <form
                onSubmit={(event) => {
                    handleNewAuthorSubmit(event);
                }}
            >
                <label>Email:</label>
                <input className="mb-3 " type="text"
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <br />

                <label>Username:</label>
                <input type="text" className="mb-3 "
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                />
                <br />

                <label>Password:</label>
                <input type="text" className="mb-3 "
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <br />

                <label>Confirm Password:</label>
                <input type="text" className="mb-3 "
                    onChange={(event) => {
                        setConfirmPassword(event.target.value)
                    }}
                />
                <br />

                <button className='bg-purple-300 rounded-full w-20 '>Register</button>
            </form>


            <form
                onSubmit={(event) => {
                    handleNewAuthorSubmit(event);
                }}
            >
                <label>Email:</label>
                <input type="text" className="mb-3 "
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <br />
                <label className='mb-3'>Password:</label>
                <input type="text"
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <br />

                <button className='bg-purple-300 rounded-full w-20 '>Login</button>
            </form>

        </div>
    )

}

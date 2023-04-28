import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import bullseye from '../img/bullseye.png';
import spring from '../img/1spring.webp'
import twitter from '../img/twitter.png'
import discord from '../img/discord.png'

import { container, Row, column, text, img, link, Card } from 'react-bootstrap'

import axios from 'axios';

export default function BeautifulPeople(props) {


    return (
        <div>
            <img src={bullseye} className='App-logo mx-auto d-block w-15 h-15 mb-40' alt="logo" />
            <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center mb-5">

                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-purple-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                    <div className="flex items-center">

                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">Tuan Phan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row text-center mb-30'>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  cursor-pointer'>Sports</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Inspiration</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Beauty</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Book</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Coding</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Fashion</p>
                <p className='col fw-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>Fitness</p>
            </div>

            <footer className=' mx-auto d-flex justify-center '>
                <img src={twitter} className='mr-2 h-8 w-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ' alt="twitter" />
                <img src={discord} className='mr-2 h-8 w-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ' alt="discord" />
            </footer>
        </div>
    );
}

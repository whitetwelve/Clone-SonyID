import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-dom';
import Sony from "../img/Sony.svg"
import Profile from "../img/profile.png"
import List from "../img/list.jpg"
import Search from "../img/search-icon.png"
import Heart from "../img/heart.png"
import "../css/10%.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const move = useNavigate()

    return (
        <nav className="bg-black container-fluid py-4 md:lg:-screen mx-auto">
            <div className="flex items-center justify-between">
                <div className="left-side ml-20">
                    <img className='w-24 inline-block cursor-pointer' src={Sony} onClick={() => move('/')}/>
                </div>
                    <div className=" ml-auto h-8 block cursor-pointer">
                        <div className="text-white absolute top-0 left-3/3 h-16 w-24 hover:bg-white opacity-30"/>
                        <div id="hover-nav1" className="text-white absolute top-0 h-16 w-20 hover:bg-white opacity-30"/>
                        <div id="hover-nav2" className="text-white absolute top-0 h-16 w-20 hover:bg-white opacity-30"/>
                        <div id="hover-nav3" className="text-white absolute top-0 h-16 w-20 hover:bg-white opacity-30"/>
                        <img className=" w-8 inline cursor-pointer" src={Profile} />
                        <p className='text-white inline text-sm ml-1'>My Sony</p>
                    </div>
                    <div className="icons cursor-pointer space-x-10 md:flex mr-20 ml-10">
                        <img className="w-7" src={Heart} />
                        <img className=" w-7" src={Search} />
                        <img className=" w-7" src={List}/>
                    </div>
                </div>
        </nav>
    )
}


export default Navbar
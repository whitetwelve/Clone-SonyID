import React, { useState, useEffect } from 'react';
import Navbar from '../assets/partials/Navbar';
import SlideIcon from "../assets/img/presentation.png"
import Airpod from "../assets/img/airpod1.png"

const DetailPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="header">
                <img className="h-96 w-full" src="https://images.unsplash.com/photo-1522008224169-e5992bed5fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <div className="absolute text-white top-24 font-extrabold left-2/3">
                    <p>LinkBuds S</p>
                    <p className='text-4xl w-96'>Selalu Terhubung, Tanpa Henti</p>
                    <p className='mt-4'>LinkBuds S membuat Anda terus terhubung dengan dunia Anda. Ultrakecil dan ringan sehingga nyaman dikenakan seharian, dan Anda bisa terhubung dengan berbagai orang dan tempat. LinkBuds S beralih otomatis ke suara ambien optimal atau noise cancelling kualitas tinggi untuk mendengarkan tanpa gangguan.</p>
                    <div className="buttons mt-4">
                        <button className='bg-indigo-500 h-10 w-36 text-sm hover:bg-indigo-600 inline'>
                            Lihat Slideshow
                        </button>
                        <button className='bg-indigo-500 h-10 w-36 text-sm ml-10 hover:bg-indigo-600 inline'>
                            Putar Video
                        </button>
                    </div>
                </div>
            </div>
            <div className="container content">
                <div className="left-side-product">
                    <img className="ml-4 h-64" src={Airpod} />
                </div>
            </div>
        </div>
    ) 
}

export default DetailPage
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../assets/partials/Navbar';
import Bg from "../assets/img/bg-sony.png"
import "../assets/css/10%.css"
import FavIcon from "../assets/img/icon-fav.png"
import Swipers from '../components/Slider';
import { dummyProducts } from "../dummies/products-footer"
import { topProduct } from '../dummies/products-footer';
import Rp from "rupiah-format"
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom"

const Main = () => {

    const ttl = "Sony Indonesia"
    document.title = ttl

    const move = useNavigate()

    let dummy = useState(dummyProducts)
    dummy = dummy[0]
    console.log(dummy);

    let topDummy = useState(topProduct)
    topDummy = topDummy[0]

    const [showLogin, setShowLogin] = useState(false)
    const handleClose = () => setShowLogin(false)

    return (
        <>
            <Navbar/>
                <div>
                    <img className="w-full" src={Bg} />
                </div>
                <div className="animate-pulse absolute top-28 left-32 square opacity-80 w-2/5 h-80 transparent bg-black"/>
                <div className="text-white">
                    <p className='font-bold absolute top-36 left-40'>INZONE H9</p>
                    <h2 className='absolute text-4xl max-w-md font-extrabold top-44 left-40'>Mendeteksi. Bereaksi. Menang.</h2>
                </div>
                <div className="absolute top-72 left-40">
                    <button className="bg-sky-600 text-white px-4 py-2 text-sm" type="submit">Temukan INZONE H9</button>
                </div>
                <div className="ml-16 mt-5">
                    <p className='font-sans font-bold text-zinc-700 text-2xl'>
                       TERBARU
                    </p>
                </div>
                <div className="list-products ml-16 mr-10 mt-5 mb-10">
                    <Swipers/>
                </div>
                <div className="footer ml-16 mt-5 mb-10">
                    <div className="footer-title mb-8">
                        <p className='font-sans font-bold text-2xl text-zinc-700'>TERBARU</p>
                    </div>
                    <div id="footer-square" className="h-44 absolute top-4/5 left-26 square opacity-80 transparent bg-yellow-700">
                        <p className='text-white font-bold text-2xl mt-4 ml-5'>Temukan model terbaru ditoko terdekat!</p>
                    </div>   
                    <div className='flex'>
                        {dummy.map((item, idx) => (
                        <div key={idx} className="mt-52 w-44 h-48 mr-10 bg-slate-300 hover:bg-slate-200 duration-300">
                            <img id="products-footer" className="cursor-pointer" src={item.image} onClick={() => move('/detail-page')} />
                            <div className="spek-footer">
                                <p className='text-sm mb-10'>{item?.spec}</p>
                                <p className='text-md font-black cursor-pointer'>{item?.title}
                                <b>&nbsp; &nbsp; {" > "} </b>
                                </p>
                                <div className="rate mb-4">
                                    <img className='h-12 cursor-pointer inline' src={item?.rating}/>
                                    <p className='view-rate inline'>{item?.viewrating}</p>
                                </div>
                                <p className='price-products text-slate-600'>{Rp.convert(item?.price)}</p>
                                <img className="h-4 mt-4 cursor-pointer" src={FavIcon} />
                            </div>
                        </div>
                        ))}
                        {topDummy.map((item, idx) => (
                            <div key={idx} className="inline bg-slate-300 w-5/12 hover:bg-slate-200 duration-300" id="top-product">
                                <img className="h-96 ml-28 mt-2 cursor-pointer" src={item?.image} />
                            <div className="spek-footer mt-10">
                                <p className='text-sm mb-10'>{item?.spec}</p>
                                <p className='text-md font-black cursor-pointer'>{item?.title}
                                <b>&nbsp; &nbsp; {" > "} </b>
                                </p>
                                <div className="rate mb-4">
                                    <img className='h-12 cursor-pointer inline' src={item?.rating}/>
                                    <p className='view-rate inline'>{item?.viewrating}</p>
                                </div>
                                <p className='price-products'>{Rp.convert(item?.price)}</p>
                                <img className="h-4 mt-4 cursor-pointer" src={FavIcon} />
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
        </>
    ) 
}

export default Main
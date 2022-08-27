import React, { useState, useEffect } from 'react';
import Navbar from '../assets/partials/Navbar';
import StarsRate from "../assets/img/star-rating.png"
import SliderReview from '../components/Slider-Review';
import FavIcon from "../assets/img/icon-fav.png"
import ShareIcon from "../assets/img/icon-share.png"
import Rp from "rupiah-format"
import { dummyProducts } from '../dummies/products-footer';
import { useParams } from "react-router-dom"
import axios from 'axios';
import Slider from '../components/Slider';

const DetailPage = () => {

    const ttl = "Detail Product"
    document.title = ttl

    const  { id }   = useParams()

    const idx = (id - 1)

    const product = dummyProducts[idx]

    // BUY
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [spec, setSpec] = useState("")
    const [image, setImage] = useState("")
    const [productsData, setProductsData] = useState([])
    console.log(productsData);

    const handleBuy = () => {
        const datas = {title, price, spec, image}
        console.log(datas);
        axios.post("https://api.kontenbase.com/query/api/v1/09ea5e7f-1b32-4c98-9bbf-8bfe0e39ee75/PHONE", datas)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

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
                <form onSubmit={() => handleBuy(productsData)}>
                    <div className="left-side-product flex ml-10">
                        <div className="img-product">
                            <img className="ml-4 h-64" src={product?.image} />
                        </div>
                        <div className="mt-14 ml-4">
                            <div className="title-product">
                                <p className='text-black text-xl font-mono'>{product?.title}</p>
                            </div>
                            <div className="span">
                                <p className='text-xs text-gray-700'>{product?.spec}</p>
                            </div>
                            <div className="rate mt-2 inline">
                                <img className='w-20 inline' src={StarsRate} />
                                <p className="inline text-xs cursor-pointer text-blue-700 mr-40 hover:text-blue-500">
                                    {product?.viewrating}
                                </p>
                            </div>  
                            <div className="btn-buy inline ml-96">
                                <button className=' text-white h-14 w-56 px-4 bg-orange-700 hover:bg-orange-800' >
                                    Beli
                                </button>
                            </div>
                            <div className="share-fav-icons">
                                <img className="h-4 cursor-pointer inline" src={FavIcon} />
                                <p className='text-xs inline ml-2'>Favorit</p>
                                <img className="h-4 cursor-pointer inline ml-4" src={ShareIcon} />
                                <p className='text-xs inline ml-2'>Share</p>
                            </div>
                            <div className="price ml-96">
                                <p className='ml-96 text-xl font-black'>{Rp.convert(product?.price)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="review flex ml-20 mb-5">
                        <p className='text-sm mr-10 cursor-pointer'>
                            Spesifikasi & fitur
                        </p>
                        <p className='text-sm mr-10 cursor-pointer'>Ulasan</p>
                        <p className='text-sm cursor-pointer'>Dukungan</p>
                    </div>
                    <div className="absolute">
                        <div className="hover:bg-indigo-500 absolute w-36 h-9 cursor-pointer bottom-3 left-16 opacity-60"/>
                        <div className="hover:bg-indigo-500 absolute w-24 h-9 cursor-pointer bottom-3 left-52 opacity-60"/>
                        <div className="hover:bg-indigo-500 absolute w-28 h-9 cursor-pointer bottom-3 left-72 opacity-60"/>
                    </div>
                    <div className="list-comment w-full h-screen">
                        <SliderReview/>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default DetailPage
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataLastSeen } from '../dummies/last-seen-product';
import "../assets/css/10%.css"

const Footer = () => {

    const [data, setData] = useState(dataLastSeen)
    
    useEffect(() => {
        setData(dataLastSeen)
    },[data])
    
    return (
        <div className="mt-52">
            <p className='font-black text-2xl ml-16'>PRODUK YANG TERAKHIR DILIHAT</p>
            <div class="grid gap-5 grid-cols-5 mt-4 ml-16">
            {data.map((item, idx) => (
                <div key={idx} className="inline bg-slate-200 w-4/6 h-44 hover:bg-slate-300 duration-300 cursor-pointer">
                    <img className="w-28 mt-8 ml-6" src={item?.image} />
                    <div className="spek-footer mt-20 cursor-pointer">
                        <p className='text-xs mb-10 w-44 text-slate-600'>{item?.spec}</p>
                        <p className='text-md font-black cursor-pointer w-max mt-24'>{item?.title}
                        <b>&nbsp; &nbsp; {" > "} </b>
                        </p>
                    </div>
                </div>
            ))}
            </div>
            <div className="bg-slate-200 w-full h-96 mt-28">
                <br/><br/><br/>
                <div className="text-product mb-8">
                    <p className='inline text-sm font-black ml-10 text-slate-600 mr-4'>1</p>
                    <p className='inline text-xs text-slate-600'>Harga yang tercantum dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</p>
                </div>
                <div className="text-product mb-1">
                    <p className='inline font-black ml-10 text-slate-600 mr-4'>*</p>
                    <p className='inline text-xs text-slate-600'>Warna asli mungkin berbeda dengan gambar pada layar.</p>
                </div>
                <div className="text-product mb-1">
                    <p className='inline font-black ml-10 text-slate-600 mr-4'>*</p>
                    <p className='inline text-xs text-slate-600'>Warna & fitur produk yang ditampilkan mungkin berbeda tergantung model dan negara.</p>
                </div>
                <div className="text-product mb-1">
                    <p className='inline font-black ml-10 text-slate-600 mr-4'>*</p>
                    <p className='inline text-xs text-slate-600'>	4K: 3,840 x 2,160 piksel.</p>
                </div>
                <div className="text-product mb-1">
                    <p className='inline font-black ml-10 text-slate-600 mr-4'>*</p>
                    <p className='inline text-xs text-slate-600'>Ketersediaan layanan tergantung wilayah. Sebagian atau seluruh bagian perangkat lunak/layanan yang diinstal pada atau dapat diakses melalui produk dapat berubah, dihentikan, dihapus,</p>
                    <p className='text-xs text-slate-600 ml-16'>ditangguhkan, atau diakhiri tanpa pemberitahuan.</p>
                </div>
                <div className="text-product mb-1">
                    <p className='inline font-black ml-10 text-slate-600 mr-4'>*</p>
                    <p className='inline text-xs text-slate-600'>	Fitur dan spesifikasi dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
                </div>
            </div>

            <div className="grid grid-rows-4 bg-black w-full h-96">
                <div class="text-white text-sm grid grid-cols-4 gap-4 py-10 px-20">
                    <div>
                        <p className='text-base text-zinc-500 mb-4'>Temukan Toko</p>
                        <div className='flex justify-between w-100 border-2 border-zinc-800 p-1'>
                            <input className='border-black focus:border-white bg-black border rounded-sm text-xs py-1 px-2' placeholder='Lokasi'/>
                            <button className='bg-blue-500 text-xs py-1 px-8 border border-white'>Cari</button>
                        </div>
                        <Link to='#' className='text-white'>Lihat Lokasi Kami</Link>
                    </div>
                    <div>
                        <p className='text-base text-zinc-500 mb-4'>Bantuan</p>
                        <ul>
                            <li className='mb-2 hover: text-zinc-500'>
                                <Link className=" text-white" to='#'>Bantuan Online</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-white" to='#'>Lokasi Perbaikan</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-white" to='#'>Biaya Perbaikan</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-white" to='#'>Informasi Garansi</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-white" to='#'>Status Perbaikan</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-base text-zinc-500 mb-4'>Bersama Sony</p>
                        <ul>
                            <li className='mb-2'>
                                <Link to='#'>Eco</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='#'>Tanggung Jawab Sosial</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='#'>My Sony</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-base text-zinc-500 mb-4'>Berita & Info</p>
                        <ul>
                            <li>
                                <Link to="">Berita</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='left-side flex flex-nowrap mt-6'>
                        <div className="mt-8 md:w-fit">
                            <button className='inline md:w-20 bg-neutral-700 mr-4 h-8 hover:bg-neutral-600'>Indonesia</button>
                            <button className='inline md:w-16 bg-neutral-700 h-8 hover:bg-neutral-600'>ID</button>
                        </div>
                        <div className="right-side absolute ml-80">
                            <p className='ml-96 inline mr-4 cursor-pointer hover:text-neutral-600'>Produk & Solusi Profesional</p>
                            <p className='inline mr-4 cursor-pointer hover:text-neutral-600'>Perusahaan</p>
                            <p className='inline mr-4 cursor-pointer hover:text-neutral-600'>Karir</p>
                            <p className='inline mr-4 cursor-pointer hover:text-neutral-600'>Hubungi Kami</p>
                        </div>
                        <hr className="bg-neutral-600 absolute mt-20 w-5/6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
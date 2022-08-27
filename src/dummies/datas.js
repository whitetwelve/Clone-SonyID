import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube} from "swiper"


import I1 from "../assets/img/product1.jfif"
import I2 from "../assets/img/product2.jfif"
import I3 from "../assets/img/product3.jfif"
import I4 from "../assets/img/product4.jfif"
import I5 from "../assets/img/product5.jpg"
import I6 from "../assets/img/product6.jpg"
import I7 from "../assets/img/product7.jpg"
import I8 from "../assets/img/product5.webp"

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, EffectCube ])

export const initialState = [
    { idx: 1, image: I1, title: "SEL2470GM2", desc:"Zoom standar FE 24-70mm F2.8 GM II >" },
    { idx: 2, image: I6, title: "SRS-XE200 ", desc : "Berpesta di mana saja dan sebarkan keriuhan >" },
    { idx: 3, image: I3, title: "ECM-W2BT", desc : "Mikrofon nirkabel untuk vlog >" },
    { idx: 4, image: I4, title: "FX3", desc : "Kebebasan Sinematik Baru >" },
    { idx: 5, image: I5, title: "α1", desc : "THE ONE >" },
    { idx: 6, image: I2, title: "Kamera blog ZV-E10", desc : " Menangkap lebih banyak aspek dunia Anda >" },
    { idx: 7, image: I7, title: "Seri A80K", desc : "Kontran dan kecerahan OLED mengagumkan, suara imersif >" },
    { idx: 8, image: I8, title: "BRAVIA XR", desc : "Hadirkan bioskop di rumah, nikmati film yang disertakan di BRAVIA XRᵀᴹ" },
  ];
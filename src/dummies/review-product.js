import React from 'react'
import Stars4 from "../assets/img/stars4.png"
import Stars5 from "../assets/img/stars5.png"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube} from "swiper"

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, EffectCube ])

export const dataReviews = [
    {"id" : 1, "username" : "Classic1", "country" : "Inggris", "comment" : "“Ini adalah earbud terkecil, teringan, ternyaman, paling todal mengganggu dan paling pas dipakai yang pernah saya gunakan.”", "review" : Stars5},
    {"id" : 2, "username" : "Fella6969", "country" : "Inggris", "comment" : "“Bagaimana caranya barang sekecil ini bisa memiliki suara sebagus itu?”", "review" : Stars5},
    {"id" : 3, "username" : "Angel L", "country" : "Spanyol", "comment" : "“Kualitas suara [Linkbuds S] sungguh mengesankan. [Earbud ini] sangat nyaman dipakai”", "review" : Stars4},
    {"id" : 4, "username" : "Jumpsuit2", "country" : "Inggris", "comment" : "“Fitur noise-cancelling-nya sangat bagus, begitu pula mode suara sekitarnya.”", "review" : Stars5},
]
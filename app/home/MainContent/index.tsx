'use client'
import React from 'react'
import Image from 'next/image'
import './style.scss'

export default function MainCarousel() {
   return (
      <div className="main-top-content">
         <div className="left">
            <h1 className="dm-sans title">What is Lorem Ipsum?</h1>
            <p className="description poppins">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
               Ipsum has been the industry's standard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
         </div>
         <div className="right">
            <Image
               className="image"
               src={'/images/mainImage.jpg'}
               alt={'chips'}
               style={{ objectFit: 'cover' }}
               fill
            />
         </div>
      </div>
   )
}

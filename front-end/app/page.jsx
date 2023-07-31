'use client';
// import  Link from 'next/link';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
// import React,{useState,useEffect} from 'react';
import styles from '../app/styles/home.module.css';
import Card from '@/components/Card';
const images = [
   '/imagens/mãos-imagem.jpeg',
   '/imagens/mãos-imagem.jpeg',
   '/imagens/mãos-imagem.jpeg',

 ];
export default  function Home(){

   return(
         <div className={styles.div}>
         <Header/>
         <div style={{ height: '200px' }}>
         <Carousel images={images} />
         </div>
         <Card/>
         </div>
   )
}
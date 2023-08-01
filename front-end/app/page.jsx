'use client';
import  Link from 'next/link';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import React,{useState,useEffect} from 'react';
import styles from '../app/styles/home.module.css';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
const images = [
   '/imagens/mãos-imagem.jpeg',
   '/imagens/mãos-imagem.jpeg',
   '/imagens/mãos-imagem.jpeg',

 ];

export default  function Home(){
   const [isLogged, setIsLogged] = useState(false);

   useEffect(() => {
      const storedLogadoValue = localStorage.getItem('logado');
      if(!storedLogadoValue ){
         localStorage.setItem('logado', 1);
         setIsLogged(true);
      }
      else{
         setIsLogged(false);
      }
  
    }, []);

   return(
      <section style={{ backgroundColor: isLogged ? 'white' : 'transparent' }}>
         {
         isLogged ? <div className={styles.divModal}>
            <div className={styles.divImage}>
         <button type='button' onClick={()=>setIsLogged(!isLogged)} style={{
               position: 'absolute',
               right: '-3px', 
               zIndex: 1, 
               backgroundColor: '#007bff',
               color: '#fff',
               border: 'none',
               borderRadius: '4px',
               padding: '6px 12px',
               cursor: 'pointer',
         }}>X</button>
            
            <img src='/imagens/PC-setup.jpg' alt='imagem de um curso'/>
            </div>
            <div className={styles.divB}>

         </div>
         <h4>Lorem ipsum dolor sit amet. Sit Quis labore sit culpa eligendi et</h4>
         <p>Lorem ipsum dolor sit amet. Sit Quis labore sit culpa eligendi et repellat vero eum omnis earum vel omnis suscipit aut neque similique. Qui magnam architecto non debitis ipsa sed eveniet nihil</p>
         <Link href='https://somosrevvo.com.br/?utm_source=google%20&utm_medium=cpc&utm_campaign=campanha-institucional&utm_content=campanha-institucional-TRK&keyword=revvo&creative=659469372405&gclid=CjwKCAjwt52mBhB5EiwA05YKoylTUjqREOH2P6a429rl1sLO9ovax0YeCMXw7wHd_wzSv7b2btV7vBoC_48QAvD_BwE' className={styles.link}> Nosso Site </Link>
        </div>
        :
        <>
         <div className={styles.div}>
         <Header/>
         <div style={{ height: '200px' }}>
         <Carousel images={images} />
         </div>
         <Card/>
         </div>
         <Footer/>
         </>
         }
         </section>

   )
}
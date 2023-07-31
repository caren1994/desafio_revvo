import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/styles/carousel.module.css';


const Carousel = ({ images }) => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cursosAleatorios, setCursosAleatorios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/cursos')
      .then(res => res.json())
      .then(data => {
        const shuffledCursos = data.slice().sort(() => Math.random() - 0.5);
        setCursosAleatorios(shuffledCursos.slice(0, images.length));
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os cursos:', error);
      });
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
 
    const interval = setInterval(nextImage, 5000);

 
    return () => clearInterval(interval);
  }, [currentImageIndex]); 

  const viewCursoId = (id) => {
    console.log(id)
  router.push('/cursos/'+id);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={prevImage}>
        &#10094;
      </button>
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={images[currentImageIndex]} alt="Carousel Image" />
        {cursosAleatorios[currentImageIndex] && (
          <div className={styles.card} key={cursosAleatorios[currentImageIndex].id}>
            <img src={cursosAleatorios[currentImageIndex].Imagem} style={{ width: 130, height: 70 }} alt="Imagem do curso" />
            <p>{cursosAleatorios[currentImageIndex].Titulo}</p>
            <p>{cursosAleatorios[currentImageIndex].Descricao}</p>
            <button type='button' onClick={()=>viewCursoId(cursosAleatorios[currentImageIndex].id)}>Ver Curso</button>
          </div>
        )}
      </div>
      <button className={styles.nextButton} onClick={nextImage}>
        &#10095;
      </button>
      </div>
    </div>
  );
};

export default Carousel;








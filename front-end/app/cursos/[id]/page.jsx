'use client';
import { useParams } from "next/navigation";
import Carousel from "../../../components/Carousel";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import style from '@/app/styles/curso.module.css';
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";
const images = [
    '/imagens/mãos-imagem.jpeg',
    '/imagens/mãos-imagem.jpeg',
    '/imagens/mãos-imagem.jpeg',
 
  ];

export default function CursoId(){
    const router = useRouter();
    const params = useParams();
    const [data, setData] = useState({});
    const [Titulo, setTitulo] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [viewFormEdite, setViewFormEdite] = useState(false);
    const [viewFormCurso, setViewFormCurso] = useState(true);
    const [msnError, setMsnError] = useState({});
    console.log(params)
    const Imagem = '/imagens/PC-setup.jpg';
    useEffect(()=>{
        fetch('http://localhost:3000/api/cursos/'+params.id).then(res=>res.json()).then(data=>setData(data))
    },[]);
    const handleEdite = ()=>{
        setViewFormEdite(!viewFormEdite);
        setViewFormCurso(!viewFormCurso);
    };
    const handleUpdate = (id)=>{
        setViewFormEdite(!viewFormEdite);
        setViewFormCurso(!viewFormCurso);
        fetch('http://localhost:3000/api/cursos', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:[`Titulo=${Titulo}`,`Descricao=${Descricao}`,`Imagem=${Imagem}`,`id=${id}`,'_method=PUT']})
          }).then((res)=>res.json()).then((data)=>{setMsnError(data)});
    };

    const handleDelete=(id)=>{
        fetch('http://localhost:3000/api/cursos', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:[`id=${id}`,'_method=DELETE']})
          }).then((res)=>res.json()).then((data)=>{console.log(data)});
 
        router.push('/');
    };
    return (
        <div className={style.div}>
        <Header/>
         <div style={{ height: '200px' }}>
         <Carousel images={images} />
         </div>
         <div className={style.divCurso}>
            {
                viewFormCurso &&   <div key={data.id}className={style.divCursoId}>
                    <img src={data.Imagem} style={{width:130,height:70}} alt="Imagem do curso"/>
                    <h2>{data.Titulo}</h2>
                    <p>{data.Descricao}</p>
                    <div className={style.divButton}>
                    <button type="button" className={style.button} onClick={()=>handleEdite()}>Editar</button>
                    <button type="button" className={style.button} onClick={()=>handleDelete(params.id)}>Excluir</button>
                    </div>

                </div>
                
            }
        </div>
         <div className={style.divForm}>
         {
        viewFormEdite && <form className={style.form}>
            <label htmlFor="titulo">Título</label>
            <input type="text" 
            id="titulo" 
            name="titulo" 
            placeholder="Título do curso" 
            value={Titulo}
			onChange={({ target }) => setTitulo(target.value)} required/>
            <label htmlFor="descricao">Descrição</label>
            <input type="text" 
            id="descricao" 
            name="descricao" 
            placeholder="Descrição do curso" 
            value={Descricao}
			onChange={({ target }) => setDescricao(target.value)} required/>
            <button type="button" onClick={()=>handleUpdate(params.id)}>Editar Curso</button>
            </form>
        }      
        {
            msnError && <p style={{color:'red',}}>{msnError.message}</p>
        }

         </div>
        <div className={style.divF}>
        <Footer/>
        </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import style from '@/app/styles/card.module.css';

export default function Card(){
    const [cursos,setCursos] = useState([]);
    const [viewForm,setViewForm] = useState(false);
    const [titulo,setTitulo] = useState('');
    const [descricao,setDescricao] = useState('');
    const handleCreate = ()=>{
        const data = {
            titulo,
            descricao
        };
        fetch('http://localhost:3000/api/cursos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setTitulo('');
            setDescricao('');
            setViewForm(false);
        });
    }
useEffect(()=>{
    fetch('http://localhost:3000/api/cursos').then(res=>res.json()).then(data=>setCursos(data))
},[]);
const handleView =()=>{
    setViewForm(!viewForm);

};

return(
    <>
    <section className={style.section}>
        {
            cursos.map((curso)=>(
                <div className={style.div}key={curso.id}>
                    <img src={curso.Imagem} style={{width:130,height:70}} alt="Imagem do curso"/>
                    <p>{curso.Titulo}</p>
                    <p>{curso.Descricao}</p>
                    <button type='button'>Ver Curso</button>

                </div>
            ))
        }
        <div className={style.divImage}>
            <button type ='button' onClick={handleView}>
                <img src="/imagens/simbolo-de-+.png" alt="símbolo de +" />
            </button>
        </div>
    </section>
        {
        viewForm && <form className={style.form}>
            <label htmlFor="titulo">Título</label>
            <input type="text" 
            id="titulo" 
            name="titulo" 
            placeholder="Título do curso" 
            value={titulo}
			onChange={({ target }) => setTitulo(target.value)} required/>
            <label htmlFor="descricao">Descrição</label>
            <input type="text" 
            id="descricao" 
            name="descricao" 
            placeholder="Descrição do curso" 
            value={descricao}
			onChange={({ target }) => setDescricao(target.value)} required/>
            <button type="button" onClick={handleCreate}>Criar Curso</button>
            </form>
        }
        </>
);
}
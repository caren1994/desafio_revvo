import React, { useState, useEffect } from 'react';
import style from '@/app/styles/card.module.css';
import { useRouter } from 'next/navigation';

export default function Card(){
    const router = useRouter();
    const [cursos,setCursos] = useState([]);
    const [viewForm,setViewForm] = useState(false);
    const [Titulo,setTitulo] = useState('');
    const [Descricao,setDescricao] = useState('');
    const [msnError,setMsnError] = useState({});
    const Imagem = '/imagens/PC-setup.jpg';

    const handleCreate = ()=>{
        fetch('http://localhost:3000/api/cursos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:[`Titulo=${Titulo}`,`Descricao=${Descricao}`,`Imagem=${Imagem}`]})
          }).then((res)=>res.json()).then((data)=>{setMsnError(data)});
          setTitulo('');
          setDescricao('');
          reload();
    }

useEffect(()=>{
    fetch('http://localhost:3000/api/cursos').then(res=>res.json()).then(data=>setCursos(data))
},[]);
const handleView =()=>{
    setViewForm(!viewForm);

};
const viewCursoId = (id) => {
    console.log(id)
  router.push('/cursos/'+id);
  };
  const reload = ()=>{
    fetch('http://localhost:3000/api/cursos').then(res=>res.json()).then(data=>setCursos(data))
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
                    <button type='button' onClick={()=>viewCursoId(curso.id)}>Ver Curso</button>

                </div>
            ))
        }
        <div className={style.divImage}>
            <button type ='button' onClick={handleView}>
                <img src="/imagens/simbolo-de-+.png" alt="símbolo de +" />
            </button>
        </div>
    </section>
    <div className={style.divForm}>
        {
        viewForm && <form className={style.form}>
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
            <div >
            <button type="button"  onClick={handleCreate}>Criar Curso</button>
            <button type="button" onClick={()=>setViewForm(false)}>X</button>
            </div>
            {msnError && <p style={{color:'red'}}>{msnError.message}</p>}
            </form>
        }
        </div>
        </>
);
}
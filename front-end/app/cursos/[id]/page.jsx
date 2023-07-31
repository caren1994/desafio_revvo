'use client';
import { useParams } from "next/navigation"
import { useEffect } from "react";

export default function CursoId(){
    const params = useParams();
    console.log(params)
    useEffect(()=>{
        fetch('http://localhost:3000/api/cursos/'+params.id).then(res=>res.json()).then(data=>console.log(data))
    },[]);
    return <div>CursoId</div>
}
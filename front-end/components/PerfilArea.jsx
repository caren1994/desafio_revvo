import Image from "next/image";
import { BiSolidDownArrow } from 'react-icons/bi';
import style from '@/app/styles/perfil.module.css';
import { useEffect,useState } from "react";
export default function PerfilArea(){
    const [users,setUsers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3000/api/users').then(res=>res.json()).then(data=>setUsers(data))
      
    }, []);
    console.log(users)
    return(
        <section className={ style.containerPerfil }>
            <div className={ style.containerPhoto}>
                <Image src='/imagens/mulher.png' alt="Foto de Perfil" fill />
            </div>
            {
            users.map((user)=>(<div className={ style.info } key={user.id}>
                <p className={ style.welcome }>Seja Bem-vindo</p>
                <p className={ style.userName }>{user.Nome}</p>
                <p className={ style.arrow }><BiSolidDownArrow /></p>
            </div>
            ))

            }
        </section>
    );
}

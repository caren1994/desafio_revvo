const { useEffect,useState } = require("react");
import Image from 'next/image';


export default function Header(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/users').then(res=>res.json()).then(data=>setUsers(data))
    },[])
    console.log(users)
    return(
        <>
        {
        users.map((user) => (
            <div key={user.id} >
                <p>Bem-vindo</p>
                <p >{user.Nome}</p>

                <Image src={user.Imagem} width={25} height={25} alt="mulher negra" />



            </div>
             ))}


        </>
    )
}
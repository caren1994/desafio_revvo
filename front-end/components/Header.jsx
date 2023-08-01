import style from '@/app/styles/header.module.css';
import PerfilArea from '../components/PerfilArea';
import Logo from '../components/Logo';

export default function Header(){

    return(
        <>
      
        <header className={ style.header }>
          <Logo />
          <PerfilArea />
        </header>
   



        </>
    )
}
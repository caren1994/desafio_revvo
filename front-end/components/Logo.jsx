import Image from 'next/image';
import styles from '@/app/styles/logo.module.css';
export default function Logo(){
    return (
        <div className={styles.logo}>
            <Image src={'/imagens/logo-preto.png'} alt="mulher negra" fill />
        </div>
    );
}
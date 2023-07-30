'use client';
import  Link from 'next/link';
import Header from '@/components/Header';
export default  function Home(){
   return(
<>
<Header/>
<h1>home</h1>
<Link href="/login">Login</Link>
</>
   )
}
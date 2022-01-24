import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
  
      <Head>
        <title>Pizza Time Pizza in Utah!</title>
        <meta name="description" content="Best pizza shop in town!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
        
      </Head>

      <Featured/>
      
      <PizzaList/>
      
    </div>
  )
}

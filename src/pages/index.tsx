import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homehero from '../components/Homehero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home</title>


      </Head>

      <Homehero />
      
    </div>
  )
}

export default Home

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'

const inter = Inter({ subsets: ['latin'] })

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Home - Victor App</title>
        <meta name="description" content="HomePage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={`${styles.main} ${inter.className}`}>
        {children}
      </main>
    </>
  )
}

import { useRouter } from "next/router"
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {

    const router = useRouter()
    const arrayURL = router.pathname.split('/')
    const currentPage = arrayURL[1]
    
    return(
        <>
            <Head>
                <link rel="icon" sizes="32x32" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="icon" href="/images/safari-pinned-tab.svg" sizes="any" type="image/svg+xml"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Roboto:wght@300;500&display=swap" rel="stylesheet"></link>
            </Head>
            
            <Header 
                currentPage = { currentPage }
            />

            { children }

            <Footer />
        </>
    )

}

export default Layout
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
                <link rel="icon" sizes="32x32" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="icon" href="/images/safari-pinned-tab.svg" sizes="any" type="image/svg+xml"></link>
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
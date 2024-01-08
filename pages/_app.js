import {Poppins, Roboto} from 'next/font/google'
import Layout from '../components/Layout'
import '../styles/globals.scss'

const poppins = Poppins({
    weight: ['500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['300', '500'],
    style: ['normal'],
    subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
    
    return(
        <>
            <style jsx global>{`
                :root{
                    --font-1: ${ roboto.style.fontFamily }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    --font-2: ${ poppins.style.fontFamily }, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }
                html, body{
                    color: #333;
                    font-family: var(--font-1), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    font-size: 16px;
                    font-weight: 200;
                    padding: 0;
                    margin: 0;
                }
                h1, h2, h3, h4, h5, h6{
                    color: #000;
                    font-family: var(--font-2), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    font-weight: 600;
                    line-height: 100%;
                    text-transform: uppercase;
                }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );

}

export default MyApp

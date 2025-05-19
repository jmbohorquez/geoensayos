import Document, { Html, Head, Main, NextScript } from 'next/document';

class GeoEnsayosDoc extends Document {

    render(){
        return(
            <Html lang="es">
                <Head>
                    <script 
                        async 
                        src="https://www.googletagmanager.com/gtag/js?id=G-ZS6M9WLYE2"
                    />
                    <script 
                        dangerouslySetInnerHTML={{
                            __html:`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-ZS6M9WLYE2');
                            `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default GeoEnsayosDoc;
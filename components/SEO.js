import Head from 'next/head'


const SEO = ({title, description, keywords, socialImg}) => {
    return(
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description } />
            <meta name="keywords" content={ keywords } />
            <meta httpEquiv="expires" content="43200"/>
            <meta property="og:type" content="company" />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description } />
            <meta property="og:image" content={ socialImg } />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:description" content={ description } />
            <meta name="twitter:image" content={ socialImg } />
        </Head>
    )
}

export default SEO
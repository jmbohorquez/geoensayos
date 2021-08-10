import fs from 'fs'

const Sitemap = () => {

    return(
        <h1>Sitemap</h1>
    )

}

export const getServerSideProps = ({ res }) => {

    const baseURL = process.env.WEB_SITE_URL

    const staticPages = fs.readdirSync('pages').filter( staticPage => {
        
        return ![
            '_app.js',
            '_document.js',
            '_error.js',
            'sitemap.xml.js',
        ].includes( staticPage )

    } )
    .map( staticPagePath => {

        let basePageName = staticPagePath.split('.')
        if( basePageName[0] == 'index' ){
            basePageName[0] = ''
        }
        return `${ baseURL }/${ basePageName[0] }`

    } )

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${ staticPages.map( url => (
            `<url>
              <loc>${ url }</loc>
              <lastmod>${ new Date().toISOString() }</lastmod>
              <changefreq> monthly </changefreq>
              <priority>1.0</priority>
            </url>`
        ) ).join('') 
        }
        </urlset>`

    res.setHeader( 'Content-Type', 'text/xml' )
    res.write( sitemap )
    res.end()


    return {
        props: {}
    }

} 

export default Sitemap
import { Metadata } from "next";
import { bodyText } from "../config/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "../styles/globals.scss";

export const metadata: Metadata = {
    title: {
        template: 'Laboratorio de pruebas de suelos, concretos y mezclas asfálticas  | Geoensayos',
        default: 'Somos un laboratorio de ensayos, altamente productiva, confiable y eficaz acreditada y certificada bajo las normas NTC/IEC 17025:2017',
    },
    icons: {
        icon: [
            { url: '/safari-pinned-tab.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>){
    return(
        <html lang="es">
            <GoogleTagManager gtmId="GTM-5G8S6G4V" />
            <body className={`${ bodyText.className } antialiased`}>
                { children }
            </body>
        </html>
    )
}
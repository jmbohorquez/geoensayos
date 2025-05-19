
import { Footer } from "../../components/ui/Footer";
import { Header } from "../../components/ui/Header";
import { WhatsappBTN } from "../../components/WhatsappBTN";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>){
    
    return(
        <>
            <Header />
            { children }
            <Footer />
            <WhatsappBTN />
        </>
    )
}
import styles from '../styles/components/Whatsapp-btn.module.scss'

import { IconWhatsapp } from './Icons'

export const WhatsappBTN = () => {
    return(
        <a
            href='https://wa.me/573168501923'
            target='_blank'
            className={ styles.btn }
        >
            <IconWhatsapp />
        </a>
    )
}
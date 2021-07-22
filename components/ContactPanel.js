import Mobile from '../public/images/smartphone.svg'
import Phone from '../public/images/phone.svg'

const ContactPanel = () => {

    return(
        <div className="contact-data-wrap">
            <h3>Contactános</h3>
            <p><span className="icon"><Mobile /></span> (+57) 317 575 4994</p>
            <p><span className="icon"><Phone /></span>  (+57) 1 - 320 5020</p>
        </div>
    )

}

export default ContactPanel
import Onac from '../public/images/certificado-onac.svg';
import Iso from '../public/images/iso-9001.svg';

const Certificaciones = () => {

    return(
        <div className="certificados-wrap">
            <div className="certificate-container certificate-iso">
                <Iso />
            </div>
            <div className="certificate-container certificate-onac">
                <Onac />
            </div>
        </div>
    )

}

export default Certificaciones
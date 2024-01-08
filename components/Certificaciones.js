import Image from 'next/image'

const Certificaciones = () => {

    return(
        <div className="certificados-wrap">
            <Image 
                alt='Certificados ISO 9000 y Onac'
                src='/images/certificados.png'
                height={96}
                width={371}
            />
        </div>
    )

}

export default Certificaciones
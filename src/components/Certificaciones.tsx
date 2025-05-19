import { OnacCertificate, Iso90001 } from "./Icons";

export const Certificaciones = () => {

    return(
        <div className="flex flex-row gap-x-8">
            <div className="certificados-item">
                <Iso90001 />
            </div>
            <div className="certificados-item">
                <OnacCertificate />
            </div>
        </div>
    )

}
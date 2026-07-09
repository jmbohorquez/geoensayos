import Link from "next/link";
import { OnacCertificate } from "./Icons";

import Iso90001 from "../../public/images/iso-9001.svg";

export const Certificaciones = () => {

    return(
        <div className="flex flex-row gap-x-8">
            <div className="certificados-item">
                <Link href="./documentos/iso-9001-2015-icontec.pdf" target="_blank">
                    <Iso90001 />
                </Link>
            </div>
            <div className="certificados-item">
                <Link href="./documentos/acreditacion-onac-2025.pdf" target="_blank">
                    <OnacCertificate />
                </Link>
            </div>
        </div>
    )

}
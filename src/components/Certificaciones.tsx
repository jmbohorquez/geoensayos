import Link from "next/link";

import { OnacCertificate } from "./Icons";
import Iso90001 from "../../public/images/iso-9001.svg";
import Logo from "../../public/images/logo.svg";

export const Certificaciones = () => {

    return(
        <div className="flex flex-row gap-2.5 pt-4">
            <div className="w-[72.5px]">
                <Link href="./documentos/iso-9001-2015-icontec.pdf" target="_blank">
                    <Iso90001 />
                </Link>
            </div>
            <div className="w-[69.4px]">
                <Link href="./documentos/acreditacion-onac-2025.pdf" target="_blank">
                    <OnacCertificate />
                </Link>
            </div>
            <div className="w-27.5">
                <Logo className="w-full" />
            </div>
        </div>
    )

}
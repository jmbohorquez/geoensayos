import Link from "next/link";

import { IconWhatsapp } from "../Icons";

interface Props {
    anchor: string;
}

export const BTNWhatsappText = ({ anchor }: Props) => {
    return(
        <Link
            href='https://wa.me/573168501923'
            target='_blank'
            className="px-12 py-4 bg-[var(--color-4)] hover:bg-[var(--color-5)] transition-all flex flex-row flex-nowrap items-center gap-4 w-fit rounded-full"
        >
            <span className="h-5 w-5 fill-white"><IconWhatsapp /></span>
            <span className="text-white text-xl">{ anchor }</span>
        </Link>
    )
}
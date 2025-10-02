import { Roboto } from "next/font/google";

export const bodyText = Roboto({
    variable: "--body-text",
    weight: ['300', '500', '700', '800'],
    style: ['normal'],
    subsets: ['latin']
});
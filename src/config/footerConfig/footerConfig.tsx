import React from "react";

import LinkedIn from "@/assets/linkedin.svg";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Twitter from "@/assets/twitter.svg";
import Image from "next/image";

type FooterItem = {
    content: string | React.ReactNode,
    url: string
};

export const footerItems: FooterItem[] = [
    {
        content: "contact",
        url: "/contact",
    },
    {
        content: "terms of services",
        url: "/terms",
    },
    {
        content: "shipping and returns",
        url: "/shipping-returns",
    }
];

export const footerSocials: FooterItem[] = [
    {
        content: <Image src={LinkedIn} alt={"LinkedIn"}/>,
        url: "/"
    },
    {
        content: <Image src={Facebook} alt={"Facebook"}/>,
        url: "/"
    },
    {
        content: <Image src={Instagram} alt={"Instagram"}/>,
        url: "/"
    },
    {
        content: <Image src={Twitter} alt={"Twitter"}/>,
        url: "/"
    }
];
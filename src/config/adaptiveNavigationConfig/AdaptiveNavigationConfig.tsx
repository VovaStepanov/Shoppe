import Image from "next/image";
import User from "@/assets/user.svg";
import Logout from "@/assets/logout.svg";

type AdaptiveNavigationItem = {
    content: string | React.ReactNode,
    href?: string,
    icon?: React.ReactNode,
    onClick?: () => void,
};

export const topAdaptiveNavigationItems: AdaptiveNavigationItem[] = [
    {
        content: "Home",
        href: "/"
    },
    {
        content: "Shop",
        href: "/shop",
    },
    {
        content: "About",
        href: "/about"
    },
    {
        content: "Blog",
        href: "/blog"
    },
    {
        content: "Help",
        href: "/help"
    },
    {
        content: "Contact",
        href: "/contact"
    },
    {
        content: "Search",
        href: "/search"
    }
];

export const bottomAdaptiveNavigationItems: AdaptiveNavigationItem[] = [
    {
        content: "My account",
        href: "/profile",
        icon: <Image src={User} alt={"Profile"}/>
    },
    {
        content: "Logout",
        onClick: () => {},
        icon: <Image src={Logout} alt={"Logout"}/>
    }
];
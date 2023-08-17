import Image from "next/image";
import Search from "@/assets/search.svg";
import Cart from "@/assets/cart.svg";
import User from "@/assets/user.svg";


type NavigationItem = {
    content: string | React.ReactNode,
    url: string
} | {
    content: string | React.ReactNode,
    onClick: () => void
}

export const navigationItemsWithLabels: NavigationItem[] = [
    {
        content: "Shop",
        url: "/shop",
    },
    {
        content: "Blog",
        url: "/blog"
    },
    {
        content: "Our Story",
        url: "/story"
    }
];

export const navigationItemsWithIcons: NavigationItem[] = [
    {
        content: <Image src={Search} alt={"Search"} width={20} height={20}/>,
        onClick: () => {}
    },
    {
        content: <Image src={Cart} alt={"Cart"} width={20} height={20}/>,
        url: "/cart"
    },
    {
        content: <Image src={User} alt={"Profile"} width={20} height={20}/>,
        url: "/profile"
    }
];

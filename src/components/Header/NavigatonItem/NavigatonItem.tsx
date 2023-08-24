"use client";

import Link from "next/link";
import {cn} from "../../../lib/twMerge"

type NavigationItemProps = {
    children: React.ReactNode,
    url?: string,
    onClick?: () => void,
    isActive?: boolean
};

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    const {children, isActive, url, onClick: clickHandler} = props;

    return (
        <div className={cn("h-full flex items-center text-black heading-5 border-b-[2px] border-transparent", {
            "border-black": isActive
        })}>
            <Link href={url || "#"} onClick={clickHandler}>
                {children}
            </Link>
        </div>
    )
}
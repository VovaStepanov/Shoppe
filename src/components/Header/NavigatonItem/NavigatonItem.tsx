"use client";

import {NavigationItemProps} from "@/config/navigationConfig";
import Link from "next/link";
import {cn} from "@/lib/twMerge"

type NavigationItemProps = {
    children: React.ReactNode,
    url: string
} | {
    children: React.ReactNode,
    onClick: () => void
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
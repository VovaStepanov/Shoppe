"use client";

import {cn} from "@/lib/twMerge";
import {NavigationList} from "./NavigationList";

import Search from "@/assets/search.svg";

type AdaptiveMenuProps = {
    isVisible: boolean,
}

export const AdaptiveMenu: React.FC<AdaptiveMenuProps> = (props) => {
    const {isVisible} = props;

    return (
        <div className={cn("fixed z-10 w-full h-screen top-[120px] left-0 bg-white sm:hidden translate-y-full transition-transform duration-300 will-change-transform", {
            ["translate-y-0"]: isVisible
        })}>
            <div className={"container"}>
                <NavigationList/>
            </div>
        </div>
    )
};
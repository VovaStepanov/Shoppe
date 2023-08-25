"use client";

import {cn} from "@/lib/twMerge";
import {NavigationList} from "./NavigationList";

import Search from "@/assets/search.svg";
import {useEffect} from "react";

type AdaptiveMenuProps = {
    isVisible: boolean,
    setIsVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const AdaptiveMenu: React.FC<AdaptiveMenuProps> = (props) => {
    const {isVisible, setIsVisible} = props;

    useEffect(() => {
        document.querySelector("html").style.overflow = isVisible ? "hidden" : "visible"
    }, [isVisible]);

    return (
        <div className={cn("fixed z-10 w-full h-screen top-[120px] left-0 bg-white sm:hidden translate-y-full transition-transform duration-300 will-change-transform", {
            ["translate-y-0"]: isVisible
        })}>
            <div className={"container"}>
                <NavigationList setIsVisible={setIsVisible}/>
            </div>
        </div>
    )
};
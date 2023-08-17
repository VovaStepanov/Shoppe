"use client";

import {cn} from "@/lib/twMerge";
import {Input} from "@/components/Input";
import {NavigationList} from "./NavigationList";

import Search from "@/assets/search.svg";

type AdaptiveMenuProps = {
    isVisible: boolean,
}

export const AdaptiveMenu: React.FC<AdaptiveMenuProps> = (props) => {
    const {isVisible} = props;

    return (
        <div className={cn("fixed z-10 w-full h-screen top-20 left-0 bg-white sm:hidden translate-y-full transition-transform duration-300 will-change-transform", {
            ["translate-y-0"]: isVisible
        })}>
            <div className={"container"}>
                <Input
                    className={"mb-3 h-10 bg-zinc-100 rounded w-full text-dark-gray body-medium"}
                    placeholder={"Search"}
                    onInput={() => {}}
                    icon={Search}
                    iconPosition={"left"}
                />
                <NavigationList/>
            </div>
        </div>
    )
};
"use client";

import {useState} from "react";

import Search from "../../assets/search.svg";

import {Logo} from "../Logo"
import {AdaptiveMenu} from "./AdaptiveMenu";
import {Navigation} from "./Navigation";
import {AdaptiveNavigation} from "./AdaptiveNavigation";
import {Input} from "../Input";

import {usePathname} from "next/navigation";

import {cn} from "@/lib/twMerge";
import Image from "next/image";

export const Header = () => {
    const pathname = usePathname();

    // Adaptive menu visibility toggle
    const [isAdaptiveMenuVisible, setIsAdaptiveMenuVisible] = useState(false);

    return (
        <header>
            <div className={cn("container flex justify-between items-center pt-1 sm:border-b sm:border-gray h-20", {
                "sm:border-transparent": pathname === "/"
            })}>
                <Logo/>
                {/* Desktop navigation */}
                <Navigation/>

                {/* Adaptive Navigation */}
                <AdaptiveNavigation isActive={isAdaptiveMenuVisible} setIsActive={setIsAdaptiveMenuVisible}/>
                <AdaptiveMenu isVisible={isAdaptiveMenuVisible}/>
            </div>
            <div className={"container visible sm:hidden"}>
                <Input
                    className={"mb-3 h-10 bg-zinc-100 rounded w-full text-dark-gray body-medium"}
                    placeholder={"Search"}
                    onInput={() => {}}
                    icon={<Image src={Search} alt={"Search"}/>}
                    iconPosition={"left"}
                />
            </div>
        </header>
    )
}
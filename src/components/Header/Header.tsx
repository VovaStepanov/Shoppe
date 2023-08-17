"use client";

import {Logo} from "@/components/Logo"
import {Navigation} from "@/components/Header/Navigation";
import {AdaptiveNavigation} from "@/components/Header/AdaptiveNavigation";
import {AdaptiveMenu} from "@/components/Header/AdaptiveMenu";
import {useState} from "react";

const Header = () => {
    // Adaptive menu visibility toggle
    const [isAdaptiveMenuVisible, setIsAdaptiveMenuVisible] = useState(false);

    return (
        <header>
            <div className={"container flex justify-between items-center pt-1 sm:border-b sm:  border-gray h-20"}>
                <Logo/>
                {/* Desktop navigation */}
                <Navigation/>

                {/* Adaptive Navigation */}
                <AdaptiveNavigation isActive={isAdaptiveMenuVisible} setIsActive={setIsAdaptiveMenuVisible}/>
                <AdaptiveMenu isVisible={isAdaptiveMenuVisible}/>
            </div>
        </header>
    )
}

module.exports = {
    Header
};
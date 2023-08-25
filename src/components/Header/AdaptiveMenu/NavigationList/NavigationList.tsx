"use client";

import {bottomAdaptiveNavigationItems, topAdaptiveNavigationItems} from "@/config/adaptiveNavigationConfig";
import Link from "next/link";

import {motion, useAnimationControls, useInView} from "framer-motion";

import {useEffect, useRef, useState} from "react";

import {cn} from "@/lib/twMerge";
import {useViewportAnimation} from "@/hooks/useViewportAnimation";

interface NavigationListProps {
    setIsVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

type visibilitySwitcherArgs = (() => void) | undefined;

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0
        }
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type:"spring",
            bounce:0.3,
            duration:0.6
        }
    }
}

export const NavigationList: React.FC<NavigationListProps> = ({setIsVisible}) => {
    const ref = useRef(null)
    const {controls} = useViewportAnimation(ref, {
        outOfViewport: "initial",
        insideViewport: "animate"
    });

    const visibilitySwitcher = (func: visibilitySwitcherArgs): () => void => {
        return () => {
            setIsVisible(false);
            func?.();
        }
    }

    return (
        <motion.ul
            ref={ref}
            className={"ml-1"}
            initial={"initial"}
            animate={controls}
            variants={{
                animate: { transition: { staggerChildren: 0.05 } },
            }}
        >
            {topAdaptiveNavigationItems.map((item, idx) => (
                <motion.li
                    className={"heading-1"} key={idx}
                    variants={fadeInAnimationVariants}
                >
                    <Link
                        className={cn("flex items-center py-3", {"gap-3": item.icon})}
                        href={item.href || "#"}
                        onClick={visibilitySwitcher(item.onClick)}>
                        <span>
                            {item.icon}
                        </span>
                        {item.content}
                    </Link>
                </motion.li>
            ))}
            <motion.hr
                className={"bg-gray h-[2px] my-6"}
                variants={fadeInAnimationVariants}
            />
            {bottomAdaptiveNavigationItems.map((item, idx) => (
                <motion.li
                    className={"heading-1"}
                    key={idx}
                    variants={fadeInAnimationVariants}
                >
                    <Link
                        className={cn("flex items-center py-3", {"gap-3": item.icon})}
                        href={item.href || "#"}
                        onClick={visibilitySwitcher(item.onClick)}>
                        <span>
                            {item.icon}
                        </span>
                        {item.content}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    )
};
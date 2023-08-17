import {topAdaptiveNavigationItems, bottomAdaptiveNavigationItems} from "@/config/adaptiveNavigationConfig";
import Link from "next/link";

import {motion, useAnimate, stagger } from "framer-motion";

import {cn} from "@/lib/twMerge";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
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

export const NavigationList = () => {

    return (
        <motion.ul
            className={"ml-1"}
            initial={"initial"}
            whileInView={"animate"}
            transition={{staggerChildren: 0.05}}
        >
            {topAdaptiveNavigationItems.map((item, idx) => (
                <motion.li
                    className={"heading-3"} key={idx}
                    variants={fadeInAnimationVariants}
                >
                    <Link
                        className={cn("flex items-center py-3", {"gap-3": item.icon})}
                        href={item.href || "#"}
                        onClick={item.onClick}>
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
                    className={"heading-3"}
                    key={idx}
                    variants={fadeInAnimationVariants}
                >
                    <Link
                        className={cn("flex items-center py-3", {"gap-3": item.icon})}
                        href={item.href || "#"}
                        onClick={item.onClick}>
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
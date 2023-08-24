"use client";

import {cn} from "../../lib/twMerge";
import {Allerta_Stencil, DM_Sans} from "next/font/google"

const Allerta_Stencil_Font = Allerta_Stencil({weight: "400", subsets: ["latin"]});

type ButtonProps = {
    children: React.ReactNode,
    onClick: () => void,
    variant?: "default" | "withCounter",
    className?: string,
    count?: number,
}

export const Button: React.FC<ButtonProps> = (props) => {
    let {children, onClick: clickHandler, variant, count, className: cls} = props;
    variant = variant || "default";

    return (
        <button className={cn("relative", cls)} onClick={clickHandler}>
            {children}

            {variant === "withCounter" &&
                <span className={cn("absolute top-[4px] right-[-4px] w-4 h-4 body-small rounded-full border-[2px] bg-white flex items-center justify-center", Allerta_Stencil_Font.className)}>
                    {count}
                </span>
            }
        </button>
    )
};
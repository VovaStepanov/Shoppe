"use client";

import {footerItems} from "@/config/footerConfig";
import Link from "next/link";
import {Input} from "@/components/Input";
import Image from "next/image";

import Arrow from "@/assets/arrow.svg";

import {cn} from "@/lib/twMerge";

export const FooterTop = () => {
    return (
        <div className={"flex justify-between xs:items-center gap-4 flex-col xs:flex-row"}>
            <div className={"flex gap-4 flex-col md:flex-row order-2 xs:order-none mt-8 xs:mt-0"}>
                {footerItems.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.url}
                        className={cn("lg:heading-5 text-dark-gray uppercase", "text-sm")}
                    >
                        {item.content}
                    </Link>
                ))}
            </div>
            <div>
                <Input
                    placeholder={"Give an email, get the newsletter."}
                    icon={Arrow}
                    onInput={() => {}}
                    iconPosition={"right"}
                    className={"body-medium md:heading-5 order-1 xs:order-none w-full xs:w-[250px] md:w-[400px] lg:h-10 h-8 border-b-[3px] text-dark-gray border-light-gray focus:border-dark-gray focus:outline-0"}
                />
            </div>
        </div>
    )
}
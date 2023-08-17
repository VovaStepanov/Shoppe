import {footerSocials} from "@/config/footerConfig/footerConfig";
import Link from "next/link";

export const FooterBottom = () => {
    return (
        <div className={"flex justify-between items-start xs:items-center mt-10 xs:mt-8 flex-col gap-12 xs:gap-0 xs:flex-row"}>
            <p className={"body-medium xs:heading-5 text-dark-gray order-2 xs:order-none"}>
                <span className={"text-black"}>
                    © 2021 Shelly.
                </span>
                &nbsp;Terms of use&nbsp;
                <span className={"text-black"}>
                    and
                </span>
                &nbsp;privacy policy.
            </p>
            <div className={"flex gap-4 order-1 xs:order-none"}>
                <span className={"visible xs:hidden"}>
                    Follow us <span className={"ml-2 inline-block w-14 h-[2px] bg-black"}></span>
                </span>
                {footerSocials.map((item, idx) => (
                    <Link key={idx} href={item.url}>
                        {item.content}
                    </Link>
                ))}
            </div>
        </div>
    )
};
import Image from "next/image";
import LogoImg from "@/assets/logo.svg";
import Link from "next/link";
export const Logo = () => {

    return (
        <div className={"w-[136px] h-8 sm:w-24 relative cursor-pointer"}>
            <Link href={"/"}>
                <Image
                    src={LogoImg}
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </Link>
        </div>
    )
}
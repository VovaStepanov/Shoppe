import {cn} from "@/lib/twMerge";
import Image from "next/image";

type InputProps = {
    placeholder: string,
    icon?: React.ReactNode,
    iconPosition?: "right" | "left",
    onInput: () => void,
    className?: string,
    attributes?: React.HTMLInputTypeAttribute,
}

const iconLeftStyles = "absolute top-[50%] left-2 translate-y-[-50%] pointer-events-none select-none";
const iconRightStyles = "absolute top-[50%] right-2 translate-y-[-50%] pointer-events-none select-none";

export const Input: React.FC<InputProps> = (props) => {
    const {placeholder, icon, iconPosition, onInput: inputHandler, className: cls, attributes} = props;

    return (
        <>
            <div className={cn("relative", cls)}>
                <input
                    placeholder={placeholder}
                    onInput={inputHandler}
                    className={cn("cursor-pointer outline-zinc-200 px-2", cls || "", {
                        "pr-12": iconPosition === "right",
                        "pl-10":iconPosition === "left"
                    })}
                    {...attributes}
                />
                <Image
                    src={icon} alt={"Icon"}
                    className={iconPosition === "left" ? iconLeftStyles : iconRightStyles}
                />
            </div>
        </>
    )
}
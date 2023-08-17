import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
}

module.exports = {
    cn
};
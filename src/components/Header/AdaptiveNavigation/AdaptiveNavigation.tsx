"use client";

import {Button} from "../../Button";
import Image from "next/image";
import { Spin as Hamburger } from 'hamburger-react'
import Cart from "../../../assets/cart.svg";

type AdaptiveNavigationProps = {
    isActive: boolean,
    setIsActive: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export const AdaptiveNavigation: React.FC<AdaptiveNavigationProps> = (props) => {
    const {isActive, setIsActive} = props;

    return (
        <div className={"visisible sm:hidden flex items center gap-2"}>
            <Button onClick={() => {}} variant={"withCounter"} count={1}>
                <Image src={Cart} alt={"Cart"} width={28} height={28}/>
            </Button>
            <Button onClick={() => {}}>
                <Hamburger toggled={isActive} onToggle={() => setIsActive(!isActive)} size={30}/>
            </Button>
        </div>
    )
};




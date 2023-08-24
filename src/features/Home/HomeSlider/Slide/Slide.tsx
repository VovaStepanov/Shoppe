"use client";

import Image from "next/image";
import Link from "next/link";

interface SlideProps {
    productName: string,
    productPrice: string,
    productUrl: string,
    image: React.ReactNode | string
}

export const Slide: React.FC<SlideProps> = (props) => {
    const {productName, productPrice, productUrl, image} = props;

    return (
        <div className={"relative w-full h-[300px] sm:h-[initial] max-h-none sm:max-h-[640px]"}>
            {image}
            <div className={"absolute bottom-[40px] sm:bottom-[initial] sm:top-[50%] left-[5%] sm:translate-y-[-50%]"}>
                <p className={"text-white heading-4 sm:heading-1"}>{productName}</p>
                <p className={"sm:heading-2 body-medium text-white mt-1 mb-3 sm:mt-4 sm:mb-12"}>{productPrice}</p>
                <Link href={productUrl} className={"inline-block rounded-[6px] border-[3px] border-white py-1 px-3 sm:px-[30px] sm:py-[10px] text-white font-bold"}>View Product</Link>
            </div>
        </div>
    );
};
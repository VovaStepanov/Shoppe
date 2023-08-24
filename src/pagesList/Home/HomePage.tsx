"use client";

import {HomeSlider} from "../../features/Home/HomeSlider";
import {LatestProductsSection} from "../../features/Home/LatestProductsSection";

export const HomePage = () => {
    return (
        <>
            <HomeSlider/>
            <LatestProductsSection/>
        </>
    );
};
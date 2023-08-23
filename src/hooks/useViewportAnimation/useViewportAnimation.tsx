import {AnimationControls, useAnimationControls, useInView} from "framer-motion";
import {MutableRefObject, useEffect, useState} from "react";

interface AnimationStates {
    outOfViewport: string,
    insideViewport: string,
};

type ViewportRef = MutableRefObject<HTMLElement | null>;

interface useVieportAnimationReturn {
    resetAnimation: () => void,
    animationState: string,
    controls: AnimationControls;
}

export const useViewportAnimation = (ref: ViewportRef, animationStates: AnimationStates): useVieportAnimationReturn => {
    const {outOfViewport, insideViewport} = animationStates;

    const inView = useInView(ref);
    const controls = useAnimationControls();
    const [animationState, setAnimationState] = useState<string>(outOfViewport);

    const resetAnimation = () => {
        setAnimationState(outOfViewport);
        controls.start(outOfViewport);
    };

    useEffect(() => {
        if (inView) {
            setAnimationState(insideViewport);
            controls.start(insideViewport);
        }
        else {
            resetAnimation();
        }
    }, [inView, controls, resetAnimation]);

    return {
        resetAnimation,
        animationState,
        controls
    };
}
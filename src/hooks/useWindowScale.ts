import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_DESIGN_HEIGHT, DEFAULT_DESIGN_WIDTH } from '@/constants/const';

const useWindowScale = (param: {
    designWidth?: number; // 设计稿尺寸
    designHeight?: number;
    width?: number;
    height?: number;
}) => {
    const {
        width,
        height,
        designWidth = DEFAULT_DESIGN_WIDTH,
        designHeight = DEFAULT_DESIGN_HEIGHT,
    } = param;
    const [scale, setScale] = useState(1);
    const handleResize = useCallback(() => {
        const wrapperWidth = width ?? window.innerWidth;
        const wrapperHeight = height ?? window.innerHeight;
        //根据屏幕的变化适配的比例
        const scale =
            wrapperWidth / wrapperHeight < designWidth / designHeight
                ? wrapperWidth / designWidth
                : wrapperHeight / designHeight;
        setScale(scale);
    }, [designHeight, designWidth, height, width]);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, [handleResize, width]);
    useEffect((): (() => void) | void => {
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);
    return {
        scale,
    };
};

export default useWindowScale;

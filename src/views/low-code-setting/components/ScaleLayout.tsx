import React, { useEffect } from 'react';
import useWindowScale from 'src/hooks/useWindowScale';
import { useLowCodeContext } from './LargeScreenProvider';
import { Form } from 'antd';

export interface ScaleLayoutProps {
    className?: any;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    width?: number;
    height?: number;
}

const ScaleLayout = (props: ScaleLayoutProps) => {
    const { children, style, width, height } = props;
    const { designWidth, designHeight, designBackgroundColor, setScale } =
        useLowCodeContext();
    const allData = useLowCodeContext();
    const { scale } = useWindowScale({
        width,
        height,
        designWidth,
        designHeight,
    });
    useEffect(() => {
        setScale(scale);
    }, [scale]);
    useEffect(() => {
        console.log(designWidth);
        console.log(designHeight);
        console.log(designBackgroundColor);
        console.log(allData);
    }, [designBackgroundColor, designWidth, designHeight]);
    return (
        <div
            style={{
                width: width ? `${width}px` : '100vw',
                height: height ? `${height}px` : '100vh',
                overflow: 'hidden',
                background: 'rgba(5,22,4,1)',
                position: 'relative',
                ...style,
            }}
        >
            <div
                style={{
                    width: `${designWidth}px`,
                    height: `${designHeight}px`,
                    backgroundColor: designBackgroundColor,
                    transformOrigin: 'left top',
                    transform: `scale(${scale}) translate(-50%, -50%)`,
                    transition: 'transform .3s ease-in-out',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    background: 'white',
                }}
            >
                <div style={{ color: 'red' }}>
                    {designBackgroundColor ?? '0000000'}
                </div>
                {children}
            </div>
        </div>
    );
};
export default ScaleLayout;

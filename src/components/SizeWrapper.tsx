import React, { memo, ReactNode } from 'react';

const SizeWrapper: React.FC<{
    width: number;
    height: number;
    backgroundColor?: string;
    style?: React.CSSProperties;
    children: ReactNode;
}> = ({ width, height, backgroundColor, style = {}, children }) => {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: backgroundColor,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default memo(SizeWrapper);

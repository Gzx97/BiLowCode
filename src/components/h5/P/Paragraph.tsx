import React, { memo } from 'react';

import SizeWrapper from '@/components/SizeWrapper';

const DemoParagraph: React.FC<any> = ({ ...props }) => {
    const {
        width = 400,
        height = 300,
        text,
        color,
        fontSize,
        lineHeight,
        backgroundColor,
    } = props;
    const defaultStyle: React.CSSProperties = {
        margin: `0`,
    };
    return (
        <>
            <SizeWrapper
                width={width}
                height={height}
                backgroundColor={backgroundColor}
            >
                <p
                    style={{
                        ...defaultStyle,
                        color: color,
                        fontSize: `${fontSize}px`,
                        lineHeight: `${lineHeight}px`,
                    }}
                >
                    {text}
                </p>
            </SizeWrapper>
        </>
    );
};

export default memo(DemoParagraph);

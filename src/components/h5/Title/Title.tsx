import React, { memo } from 'react';

const DemoTitle: React.FC<any> = ({ ...props }) => {
    const { text, color, fontSize, lineHeight } = props;
    const defaultStyle: React.CSSProperties = {
        fontSize: `24px`,
        margin: `0`,
        fontWeight: 800,
    };
    return (
        <>
            <h1
                style={{
                    ...defaultStyle,
                    color: color,
                    fontSize: `${fontSize}px`,
                    lineHeight: `${lineHeight}px`,
                }}
            >
                {text}
            </h1>
        </>
    );
};

export default memo(DemoTitle);

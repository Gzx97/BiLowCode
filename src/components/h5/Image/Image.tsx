import React, { memo } from 'react';

import SizeWrapper from '@/components/SizeWrapper';
import { isNilEmpty } from '@/commons/util/isNilEmpty';
import { Empty } from 'antd';

const DemoImage: React.FC<any> = ({ ...props }) => {
    const { width, height, images = [], backgroundColor } = props;
    console.log(images);
    const [myImage] = images;
    const defaultStyle: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
        margin: 'auto',
    };
    return (
        <>
            <SizeWrapper
                style={{
                    display: 'table-cell',
                    verticalAlign: 'middle',
                }}
                width={width}
                height={height}
                backgroundColor={backgroundColor}
            >
                {isNilEmpty(myImage) && <Empty description="image" />}
                {!isNilEmpty(myImage) && (
                    <img style={{ ...defaultStyle }} src={myImage?.url} />
                )}
            </SizeWrapper>
        </>
    );
};

export default memo(DemoImage);

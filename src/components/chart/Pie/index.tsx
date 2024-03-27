import React, { memo } from 'react';
import { Pie, PieConfig } from '@ant-design/charts';
import SizeWrapper from '@/components/SizeWrapper';

const DemoPie: React.FC<any> = ({ width, height, backgroundColor }) => {
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config: PieConfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <SizeWrapper
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        >
            <Pie {...config} supportCSSTransform />
        </SizeWrapper>
    );
};

export default memo(DemoPie);

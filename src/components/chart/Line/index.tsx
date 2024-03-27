import React, { useState, useEffect, useRef, memo, useMemo } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { LINE_MOCK_DATA } from './mockData';
import { ChartLineType } from '@/constants/types';
import SizeWrapper from '@/components/SizeWrapper';
import { useRequest } from 'ahooks';
import request from '@/commons/lib/asiox.lib';

const DemoLine: React.FC<ChartLineType> = ({ ...props }) => {
    const {
        width = 400,
        height = 300,
        xField,
        yField,
        backgroundColor,
        dataSourceConfig = {},
    } = props;
    const ref = useRef();
    const { apiAddress, useApi } = dataSourceConfig;
    const { data: apiData, run: getData } = useRequest(
        (address) => {
            return request.get(address);
        },
        { manual: true }
    );
    useEffect(() => {
        console.log(apiData);
        useApi && getData(apiAddress);
    }, [apiAddress, useApi]);

    const config: LineConfig = useMemo(() => {
        return {
            data: LINE_MOCK_DATA,
            // point: {
            //     size: 5,
            //     shape: 'diamond',
            //     style: {
            //         fill: 'white',
            //         stroke: '#2593fc',
            //         lineWidth: 2,
            //     },
            // },
            height: height,
            width: width,
            xField: xField,
            yField: yField,
            // supportCSSTransform: true, //https://s2.antv.vision/manual/faq#%E7%88%B6%E7%BA%A7%E5%85%83%E7%B4%A0%E4%BD%BF%E7%94%A8%E4%BA%86-code-classlanguage-texttransform-scalecode-%E5%90%8E%E5%9B%BE%E8%A1%A8%E9%BC%A0%E6%A0%87%E5%9D%90%E6%A0%87%E5%93%8D%E5%BA%94%E4%B8%8D%E6%AD%A3%E7%A1%AE
        };
    }, [props]);

    return (
        <SizeWrapper
            width={width}
            height={height}
            backgroundColor={backgroundColor}
        >
            <Line {...config} chartRef={ref} supportCSSTransform />
        </SizeWrapper>
    );
};

export default memo(DemoLine);

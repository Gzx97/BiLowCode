import React from 'react';
import { NODE_TYPE, NODE_TYPE_GROUP } from './enum';
import { NodeConfigType } from './types';
import {
    LineChartOutlined,
    PictureOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import DemoLine from '@/components/chart/Line';
import DemoPie from '@/components/chart/Pie';
import LineConfigForm from '@/components/chart/Line/LineConfigForm';
import PieConfigForm from '@/components/chart/Pie/PieConfigForm';
import TitleConfigForm from '@/components/h5/Title/TitleConfigForm';
import DemoTitle from '@/components/h5/Title/Title';
import ParagraphConfigForm from '@/components/h5/P/ParagraphConfigForm';
import DemoParagraph from '@/components/h5/P/Paragraph';
import DemoImage from '@/components/h5/Image/Image';
import ImageConfigForm from '@/components/h5/Image/ImageConfigForm';

/** 折线图 数据配置 */
export const chartLineNodeConfig: NodeConfigType<any> = {
    type: NODE_TYPE.CHART_LINE,
    name: '折线图',
    icon: <LineChartOutlined />,
    element: DemoLine,
    configForm: LineConfigForm,
    group: NODE_TYPE_GROUP.CHART,
};

/** 饼图 数据配置 */
export const chartPieNodeConfig: NodeConfigType<any> = {
    type: NODE_TYPE.CHART_PIE,
    name: '饼图',
    icon: <PieChartOutlined />,
    configForm: PieConfigForm,
    element: DemoPie,
    group: NODE_TYPE_GROUP.CHART,
};

/** title 数据配置 */
export const h5TitleNodeConfig: NodeConfigType<any> = {
    type: NODE_TYPE.H5_TITLE,
    name: '标题',
    icon: <span>Title</span>,
    configForm: TitleConfigForm,
    element: DemoTitle,
    group: NODE_TYPE_GROUP.H5,
};
export const h5ParagraphNodeConfig: NodeConfigType<any> = {
    type: NODE_TYPE.H5_PARAGRAPH,
    name: '段落',
    icon: <span>Paragraph</span>,
    configForm: ParagraphConfigForm,
    element: DemoParagraph,
    group: NODE_TYPE_GROUP.H5,
};

export const h5ImageNodeConfig: NodeConfigType<any> = {
    type: NODE_TYPE.H5_IMAGE,
    name: '图片',
    icon: <PictureOutlined />,
    configForm: ImageConfigForm,
    element: DemoImage,
    group: NODE_TYPE_GROUP.H5,
};

/** 分组配置（ 这里是有序的 ）*/
export const nodeTypeGroupConfig: {
    [key in NODE_TYPE_GROUP]: {
        name: string;
        nodes: NODE_TYPE[];
    };
} = {
    [NODE_TYPE_GROUP.CHART]: {
        name: '图表组件',
        nodes: [NODE_TYPE.CHART_LINE, NODE_TYPE.CHART_PIE],
    },
    [NODE_TYPE_GROUP.H5]: {
        name: 'H5组件',
        nodes: [NODE_TYPE.H5_PARAGRAPH, NODE_TYPE.H5_TITLE, NODE_TYPE.H5_IMAGE],
    },
    [NODE_TYPE_GROUP.CUSTOM]: {
        name: '自定义组件',
        nodes: [],
    },
};

export const NODE_CONFIGS = [
    chartLineNodeConfig,
    chartPieNodeConfig,
    h5TitleNodeConfig,
    h5ParagraphNodeConfig,
    h5ImageNodeConfig,
];

export const NODE_CONFIGS_MAP = Object.fromEntries(
    NODE_CONFIGS.map((config) => [config.type, config])
);

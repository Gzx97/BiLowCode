import { NODE_TYPE, NODE_TYPE_GROUP } from './enum';

export type NodeConfigType<T> = {
    type: NODE_TYPE;
    name: string;
    icon: React.ReactElement;
    element: React.FC<any>;
    configForm: React.FC<ChartLineType & T>;
    group: NODE_TYPE_GROUP;
};

export type ChartLineType = {
    width?: number;
    height?: number;
    [key: string]: any;
};

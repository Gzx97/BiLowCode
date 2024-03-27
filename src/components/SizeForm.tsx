import React from 'react';
import { Form, InputNumber, Slider } from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import styles from './index.module.less';
import ColorPickerFormItem from './ColorPickerFormItem';

type SizeFormType = {
    namePath: NamePath;
    initWidth?: number;
    initHeight?: number;
    children?: React.ReactNode;
};
const SizeForm: React.FC<SizeFormType> = ({
    namePath,
    initWidth,
    initHeight,
    children,
}) => {
    const form = Form.useFormInstance();
    const wrapperWidth = form?.getFieldValue('designWidth');
    const wrapperHeight = form?.getFieldValue('designHeight');
    return (
        <div>
            <div className={styles.setSizeWrapper}>
                <Form.Item
                    label="组件宽度"
                    name={_.concat(namePath, 'width')}
                    initialValue={initWidth ?? 400}
                >
                    <InputNumber min={0} step={10} />
                </Form.Item>
                <Form.Item
                    label="组件高度"
                    name={_.concat(namePath, 'height')}
                    initialValue={initHeight ?? 300}
                >
                    <InputNumber min={0} step={10} />
                </Form.Item>
            </div>
            <div className={styles.setSizeWrapper}>
                <Form.Item name={_.concat(namePath, 'width')}>
                    <Slider min={0} max={wrapperWidth} step={1} />
                </Form.Item>
                <Form.Item name={_.concat(namePath, 'height')}>
                    <Slider min={0} max={wrapperHeight} step={1} />
                </Form.Item>
            </div>
            <Form.Item
                name={_.concat(namePath, 'backgroundColor')}
                label="背景颜色"
                initialValue={'#FFF'}
            >
                <ColorPickerFormItem />
            </Form.Item>
            {children}
        </div>
    );
};
export default SizeForm;

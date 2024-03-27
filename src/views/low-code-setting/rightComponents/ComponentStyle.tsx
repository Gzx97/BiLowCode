import React, { useEffect } from 'react';
import styles from './RightComponents.module.less';
import {
    Button,
    ColorPicker,
    Divider,
    Form,
    Input,
    InputNumber,
    Space,
} from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import { useLowCodeContext } from '../components/LargeScreenProvider';

type ComponentStyleType = {
    onChange?: (style: string) => void;
    value?: string;
    namePath: NamePath;
};
const ComponentStyle: React.FC<ComponentStyleType> = ({ namePath }) => {
    return (
        <div>
            <Form.Item label="位置" required style={{ margin: 0 }}>
                <Space>
                    <Form.Item
                        rules={[{ required: true }]}
                        name={_.concat(namePath, 'top')}
                    >
                        <InputNumber prefix="top:" style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true }]}
                        name={_.concat(namePath, 'left')}
                    >
                        <InputNumber prefix="left:" style={{ width: '100%' }} />
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item
                rules={[{ required: true }]}
                name={_.concat(namePath, 'zIndex')}
                label="组件层级权重"
                initialValue={10}
            >
                <InputNumber prefix="z-index:" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item noStyle>
                <Button
                    type="primary"
                    disabled
                    // onClick={() => {
                    //     const styleValue = form.getFieldValue('style');
                    //     layoutForm.setFieldValue(namePath, styleValue);
                    // }}
                >
                    TODO：添加更多其他style信息
                </Button>
            </Form.Item>
        </div>
    );
};
export default ComponentStyle;

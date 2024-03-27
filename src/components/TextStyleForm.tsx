import React from 'react';
import { Form, InputNumber } from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import ColorPickerFormItem from './ColorPickerFormItem';

type TextStyleFormType = {
    namePath: NamePath;
};
const TextStyleForm: React.FC<TextStyleFormType> = ({ namePath }) => {
    return (
        <div>
            <Form.Item
                name={_.concat(namePath, 'fontSize')}
                label="字体大小"
                initialValue={20}
            >
                <InputNumber suffix="px" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name={_.concat(namePath, 'lineHeight')}
                label="行高"
                initialValue={20}
            >
                <InputNumber suffix="px" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name={_.concat(namePath, 'color')}
                label="字体颜色"
                initialValue={'#000'}
            >
                <ColorPickerFormItem />
            </Form.Item>
        </div>
    );
};
export default TextStyleForm;

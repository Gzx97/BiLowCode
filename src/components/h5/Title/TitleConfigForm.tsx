import React, { useEffect } from 'react';
import {
    Button,
    ColorPicker,
    Divider,
    Form,
    Input,
    InputNumber,
    Select,
    Space,
    Switch,
} from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import styles from '../../index.module.less';
import TextStyleForm from '@/components/TextStyleForm';

type TitleConfigFormType = {
    namePath: NamePath;
};
const TitleConfigForm: React.FC<TitleConfigFormType> = ({ namePath }) => {
    const form = Form.useFormInstance();
    console.log(namePath);
    return (
        <div>
            <Form.Item
                name={_.concat(namePath, 'text')}
                label="内容"
                initialValue={`请输入标题`}
            >
                <Input />
            </Form.Item>
            <TextStyleForm namePath={namePath} />
        </div>
    );
};
export default TitleConfigForm;

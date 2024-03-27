import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import styles from '../../index.module.less';
import TextStyleForm from '@/components/TextStyleForm';
import SizeForm from '@/components/SizeForm';

type TitleConfigFormType = {
    namePath: NamePath;
};
const ParagraphConfigForm: React.FC<TitleConfigFormType> = ({ namePath }) => {
    const form = Form.useFormInstance();
    return (
        <div>
            <SizeForm namePath={namePath} />
            <Form.Item
                name={_.concat(namePath, 'text')}
                label="内容"
                initialValue={`请输入内容`}
            >
                <Input.TextArea />
            </Form.Item>
            <TextStyleForm namePath={namePath} />
        </div>
    );
};
export default ParagraphConfigForm;

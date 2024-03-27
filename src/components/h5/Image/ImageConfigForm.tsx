import React from 'react';
import { Form, Radio } from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';

import SizeForm from '@/components/SizeForm';
import UploadImage from '@/components/upload/UploadImage';

type ImageConfigFormType = {
    namePath: NamePath;
};
const ImageConfigForm: React.FC<ImageConfigFormType> = ({ namePath }) => {
    return (
        <div>
            <SizeForm namePath={namePath} />
            <Form.Item
                name={_.concat(namePath, 'images')}
                label="上传图片"
                valuePropName="fileList"
            >
                <UploadImage />
            </Form.Item>
            <Form.Item
                name={_.concat(namePath, 'imageMode')}
                label="图片模式"
                initialValue={'auto'}
            >
                <Radio.Group
                    options={[
                        {
                            label: '撑满容器',
                            value: 'full',
                        },
                        {
                            label: '自适应',
                            value: 'auto',
                        },
                    ]}
                />
            </Form.Item>
        </div>
    );
};
export default ImageConfigForm;

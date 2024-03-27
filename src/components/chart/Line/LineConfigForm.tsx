import React from 'react';
import { Form, Input, Space } from 'antd';
import _ from 'lodash';
import { NamePath } from 'antd/es/form/interface';
import SizeForm from '@/components/SizeForm';
import DataSourceForm from '@/components/DataSourceForm';

type LineConfigFormType = {
    namePath: NamePath;
};
const LineConfigForm: React.FC<LineConfigFormType> = ({ namePath }) => {
    return (
        <div>
            <SizeForm namePath={namePath} />
            <Form.Item label="坐标轴字段" style={{ margin: 0 }}>
                <Space>
                    <Form.Item
                        name={_.concat(namePath, 'xField')}
                        initialValue={'year'}
                    >
                        <Input prefix="X轴：" />
                    </Form.Item>
                    <Form.Item
                        name={_.concat(namePath, 'yField')}
                        initialValue={'value'}
                    >
                        <Input prefix="Y轴：" />
                    </Form.Item>
                </Space>
            </Form.Item>

            <Form.Item name={_.concat(namePath, 'dataSourceConfig')}>
                <DataSourceForm
                    namePath={_.concat(namePath, 'dataSourceConfig')}
                />
            </Form.Item>
        </div>
    );
};
export default LineConfigForm;

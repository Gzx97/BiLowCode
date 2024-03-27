import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Switch } from 'antd';
import { NamePath } from 'antd/es/form/interface';
import styles from './index.module.less';
import { useLowCodeContext } from '@/views/low-code-setting/components/LargeScreenProvider';
import { RuleObject } from 'antd/es/form';

type DataSourceFormType = {
    namePath: NamePath;
    value?: Record<string, any>;
};
const DataSourceForm: React.FC<DataSourceFormType> = ({ namePath, value }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const { form: layoutForm } = useLowCodeContext();

    const showModal = () => {
        form.setFieldsValue({ ...value }); //回显
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        await form.validateFields();
        const value = form.getFieldsValue(true);
        layoutForm.setFieldValue(namePath, { ...value });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };
    useEffect(() => {
        form.setFieldsValue({ ...value }); //回显
    }, [value]);

    const validateApiAddress = async (rule: RuleObject, value: string) => {
        // const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        const urlPattern = /[^\s/$.?#].[^\s]*$/i;
        if (!urlPattern.test(value)) {
            return Promise.reject('请输入正确的地址');
        }
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                编辑数据源
            </Button>
            <Modal
                title="编辑数据源"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className={styles.modalContentWrapper}>
                    <Form form={form} layout="vertical">
                        <Form.Item name="useApi" label="是否配置api">
                            <Switch />
                        </Form.Item>
                        <Form.Item dependencies={['useApi']} noStyle>
                            {({ getFieldValue }) => {
                                const useApi = getFieldValue('useApi');
                                if (useApi) {
                                    return (
                                        <>
                                            <Form.Item
                                                name="apiAddress"
                                                label="api地址"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            '请输入API地址',
                                                    },
                                                    {
                                                        validator:
                                                            validateApiAddress,
                                                    }, // 使用自定义校验规则
                                                ]}
                                            >
                                                <Input placeholder="例：be/asset/assets/all" />
                                            </Form.Item>
                                            <Form.Item
                                                name="header"
                                                label="信息头"
                                            >
                                                <Input.TextArea placeholder="请输入头信息，如{token:123456}，格式必须为json对象" />
                                            </Form.Item>
                                        </>
                                    );
                                }
                            }}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};
export default DataSourceForm;

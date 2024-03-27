import React from 'react';
import styles from './RightComponents.module.less';
import { Divider, Form, InputNumber, Space, Typography } from 'antd';
import { DEFAULT_DESIGN_HEIGHT, DEFAULT_DESIGN_WIDTH } from '@/constants/const';
import _ from 'lodash';
import ComponentStyle from './ComponentStyle';
import { NODE_CONFIGS_MAP } from '@/constants/configs';
import { isNilEmpty } from '@/commons/util/isNilEmpty';
import ColorPickerFormItem from '@/components/ColorPickerFormItem';
const RightComponents: React.FC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Typography.Title level={5} style={{ marginTop: 0 }}>
                    容器设置
                </Typography.Title>
                <Form.Item label="容器尺寸" required style={{ margin: 0 }}>
                    <Space>
                        <Form.Item
                            name="designWidth"
                            initialValue={DEFAULT_DESIGN_WIDTH}
                            rules={[{ required: true }]}
                        >
                            <InputNumber
                                prefix="width："
                                step={100}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="designHeight"
                            initialValue={DEFAULT_DESIGN_HEIGHT}
                            rules={[{ required: true }]}
                        >
                            <InputNumber
                                prefix="height："
                                step={100}
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Space>
                </Form.Item>
                <Form.Item
                    label="容器背景颜色"
                    name="designBackgroundColor"
                    initialValue="#FFF"
                >
                    <ColorPickerFormItem />
                </Form.Item>
                <Divider />
                <Form.Item noStyle shouldUpdate>
                    {(form) => {
                        const activeNamePath =
                            form.getFieldValue('activeNamePath');
                        const [nodeType] = activeNamePath ?? [];
                        const ChartFormComponent =
                            NODE_CONFIGS_MAP?.[nodeType]?.configForm;
                        if (isNilEmpty(activeNamePath)) return null;

                        return (
                            <>
                                <Typography.Title level={5}>
                                    {`属性设置（ID:${activeNamePath?.[0]}${activeNamePath?.[1]}）`}
                                </Typography.Title>
                                <Typography.Title level={5}></Typography.Title>

                                <Form.Item
                                    rules={[{ required: true }]}
                                    name={_.concat(activeNamePath, 'style')}
                                >
                                    <ComponentStyle
                                        namePath={_.concat(
                                            activeNamePath,
                                            'style'
                                        )}
                                    />
                                </Form.Item>
                                <Divider />
                                {ChartFormComponent && activeNamePath && (
                                    <ChartFormComponent
                                        namePath={_.concat(
                                            activeNamePath,
                                            'configData'
                                        )}
                                    />
                                )}
                            </>
                        );
                    }}
                </Form.Item>
            </div>
        </>
    );
};
export default RightComponents;

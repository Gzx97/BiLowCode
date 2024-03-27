import React, { useRef, useState } from 'react';
import styles from './LeftComponents.module.less';
import _ from 'lodash';
import { NODE_TYPE } from '@/constants/enum';
import ComponentsItem from './ComponentsItem';
import { Button, Form, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { nodeTypeGroupConfig } from '@/constants/configs';

const LeftComponents: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div draggable className={styles.wrapper}>
                <Form.Item>
                    {/* <Button
                        onClick={() => {
                            navigate('/develop-view');
                        }}
                    >
                        查看所有组件
                    </Button> */}
                    <Button
                        type="dashed"
                        onClick={() => {
                            navigate('/low-code-view');
                        }}
                    >
                        预览效果
                    </Button>
                </Form.Item>

                {/* {Object.keys(NODE_TYPE).map((key) => {
                        return (
                            <ComponentsItem
                                key={key}
                                nodeType={key as NODE_TYPE}
                            />
                        );
                    })} */}
                {_.map(nodeTypeGroupConfig, (config) => {
                    return (
                        <div key={config.name}>
                            <Typography.Title level={5}>
                                {config.name}
                            </Typography.Title>
                            <Space wrap>
                                {config.nodes.map((key) => {
                                    return (
                                        <ComponentsItem
                                            key={key}
                                            nodeType={key as NODE_TYPE}
                                        />
                                    );
                                })}
                            </Space>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default LeftComponents;

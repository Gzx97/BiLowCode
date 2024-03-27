import React, { useRef } from 'react';
import styles from './Content.module.less';
import ScaleLayout from '../components/ScaleLayout';
import { useDrop, useSize } from 'ahooks';
import { Form } from 'antd';
import ContentComponentItem from './ContentComponentItem';
import _ from 'lodash';
import { useLowCodeContext } from '../components/LargeScreenProvider';
import { NAME_SEPARATOR } from '@/constants/const';
import { NODE_TYPE } from '@/constants/enum';
const LowCodeContent: React.FC<{ isView?: boolean }> = ({ isView }) => {
    const { scale } = useLowCodeContext();
    const ref = useRef(null);
    const size = useSize(ref);
    const dropRef = useRef(null);
    const form = Form.useFormInstance();
    useDrop(dropRef, {
        onDom: (content: string, e) => {
            // console.log('onDom', content, e);
            const isEditContent = content.includes(NAME_SEPARATOR);
            const [editContent, editContentIndex] = _.split(
                content,
                NAME_SEPARATOR
            );
            const wrapperPosition = (
                dropRef?.current as unknown as Element
            )?.getBoundingClientRect(); //容器的位置信息

            const domEvent = e as React.DragEvent<Element> & {
                offsetX: number;
                offsetY: number;
            };
            const { left: wrapperLeft, top: wrapperTop } = wrapperPosition;
            const { clientY, clientX } = domEvent;
            const offsetX = (clientX - wrapperLeft) / scale;
            const offsetY = (clientY - wrapperTop) / scale;
            const nodeTypePath = isEditContent ? editContent : content;
            const contentValue = form.getFieldValue(nodeTypePath) ?? [];

            const nameIndex = isEditContent
                ? editContentIndex
                : contentValue?.length ?? 0; //如果是修改元素，传入相应的name，如果是新增 name自增
            //自动激活
            form.setFieldValue('activeNamePath', [
                nodeTypePath,
                Number(nameIndex),
            ]);
            //设置属性值
            form.setFieldValue([nodeTypePath, nameIndex], {
                ...form.getFieldValue([nodeTypePath, nameIndex]),
                style: {
                    ...form.getFieldValue([nodeTypePath, nameIndex, 'style']),
                    left: offsetX,
                    top: offsetY,
                },
                id: `${nodeTypePath}${nameIndex}`,
            });
        },
        onDragEnter: (e) => {
            // console.log('onDragEnter', e);
        },
        onDragOver(e) {
            // console.log('onDragOver', e);
        },
        onDragLeave(e) {
            // console.log('onDragLeave', e);
        },
    });

    return (
        <div className={styles.layoutWrapper}>
            <div ref={ref} className={styles.contentWrapper}>
                <ScaleLayout width={size?.width} height={size?.height}>
                    <div ref={dropRef} className={styles.positionWrapper}>
                        {Object.keys(NODE_TYPE).map((nodeType) => {
                            return (
                                <Form.Item key={nodeType} noStyle shouldUpdate>
                                    {(form) => {
                                        const contentValue =
                                            form.getFieldValue(nodeType) ?? [];
                                        return contentValue?.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <ContentComponentItem
                                                        isView={isView}
                                                        key={item?.id}
                                                        index={index}
                                                        nodeType={
                                                            nodeType as NODE_TYPE
                                                        }
                                                    />
                                                );
                                            }
                                        );
                                    }}
                                </Form.Item>
                            );
                        })}
                    </div>
                </ScaleLayout>
            </div>
        </div>
    );
};
export default LowCodeContent;

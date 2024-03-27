import React, { useRef } from 'react';
import { useDrag, useSize } from 'ahooks';
import { Form } from 'antd';
import _ from 'lodash';
import { NODE_TYPE } from '@/constants/enum';
import { NAME_SEPARATOR, THUMBNAIL_STYLE } from '@/constants/const';
import styles from './ContentComponentItem.module.less';
import classNames from 'classnames';
import { DeleteOutlined } from '@ant-design/icons';
import { NODE_CONFIGS_MAP } from '@/constants/configs';
import { useLowCodeContext } from '../components/LargeScreenProvider';
type ContentComponentItemProps = {
    index: number;
    nodeType: NODE_TYPE;
    isView?: boolean;
};
const ContentComponentItem: React.FC<ContentComponentItemProps> = ({
    index,
    nodeType,
    isView,
}) => {
    const dragRef = useRef(null);
    const dragSize = useSize(dragRef);
    const { scale } = useLowCodeContext();
    /** 生成鼠标缩略图的ID 用来删除该元素 */
    const THUMBNAIL_ID = 'THUMBNAIL_ID';
    useDrag(`${nodeType}${NAME_SEPARATOR}${index}`, dragRef, {
        onDragStart: (event) => {
            // 创建并显示缩略图
            const thumbnail = document.createElement('div');
            thumbnail.innerHTML = nodeType; // 替换成您自己的缩略图内容
            thumbnail.id = THUMBNAIL_ID;
            Object.assign(thumbnail.style, THUMBNAIL_STYLE, {
                width: `${(dragSize?.width ?? 1) * scale}px`,
                height: `${(dragSize?.height ?? 1) * scale}px`,
            });
            document.body.appendChild(thumbnail);
            const dt = event.dataTransfer;
            // 设置缩略图为拖拽图像
            dt?.setDragImage(thumbnail, 0, 0);
        },
        onDragEnd: (e) => {
            // console.log('onDragEnd=', e);
            const element = document.getElementById(THUMBNAIL_ID);
            element && document.body.removeChild(element);
        },
    });

    return (
        <Form.Item shouldUpdate noStyle>
            {(form) => {
                const value = form.getFieldValue([nodeType, index]);
                const activeNamePath = form.getFieldValue('activeNamePath');
                const isActive = _.isEqual(activeNamePath, [nodeType, index]);
                const Component = NODE_CONFIGS_MAP?.[nodeType]?.element;
                const configData = form.getFieldValue([
                    nodeType,
                    index,
                    'configData',
                ]);

                return (
                    <div
                        ref={dragRef}
                        style={{
                            display: `${value ? 'block' : 'none'}`,
                            ...value?.style,
                        }}
                        className={classNames(styles.itemBox, {
                            [styles.active]: isActive && !isView,
                        })}
                        onClick={(e) => {
                            e.stopPropagation();
                            form.setFieldValue('activeNamePath', [
                                nodeType,
                                index,
                            ]);
                        }}
                    >
                        {isActive && !isView && (
                            <div
                                onClick={(e) => {
                                    e.stopPropagation(); //防止点击删除的时候激活该路径
                                    const value = form.getFieldValue(nodeType);
                                    const newValue = _.cloneDeep(value);
                                    newValue.splice(index, 1);
                                    form.setFieldValue(nodeType, newValue);
                                    form.setFieldValue('activeNamePath', []);
                                    // form.resetFields(['activeNamePath']);
                                }}
                                className={styles.deleteWrapper}
                            >
                                <DeleteOutlined />
                            </div>
                        )}
                        {Component && <Component {...configData} />}
                    </div>
                );
            }}
        </Form.Item>
    );
};
export default ContentComponentItem;

import React, { useRef, useState } from 'react';
import styles from './LeftComponents.module.less';
import { useDrag } from 'ahooks';
import _ from 'lodash';
import { NODE_TYPE } from '@/constants/enum';
import { THUMBNAIL_STYLE } from '@/constants/const';
import { NODE_CONFIGS_MAP } from '@/constants/configs';

type ComponentsItemType = {
    nodeType: NODE_TYPE;
};
const ComponentsItem: React.FC<ComponentsItemType> = ({ nodeType }) => {
    const dragRef = useRef(null);
    const [myThumbnail, setMyThumbnail] = useState<HTMLDivElement | null>(null);

    useDrag(nodeType, dragRef, {
        onDragStart: (event) => {
            // 创建并显示缩略图
            const thumbnail = document.createElement('div');
            thumbnail.innerHTML = nodeType; // 替换成您自己的缩略图内容
            Object.assign(thumbnail.style, THUMBNAIL_STYLE);
            document.body.appendChild(thumbnail);
            // 设置缩略图为拖拽图像
            event.dataTransfer?.setDragImage(thumbnail, 0, 0);
            // 存储缩略图的引用，以便在 dragend 事件中进行清除
            setMyThumbnail(thumbnail);
        },
        onDragEnd: (e) => {
            // console.log('onDragEnd=', e);
            if (myThumbnail) {
                document.body.removeChild(myThumbnail);
                setMyThumbnail(null);
            }
        },
    });
    const icon = NODE_CONFIGS_MAP?.[nodeType]?.icon;
    const name = NODE_CONFIGS_MAP?.[nodeType]?.name;
    return (
        <>
            <div ref={dragRef} className={styles.componentItem}>
                {/* {nodeType} */}
                {name}
                {icon}
            </div>
        </>
    );
};
export default ComponentsItem;

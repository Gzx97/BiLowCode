import React from 'react';
import styles from './index.module.less';
import { AppToolbar, VPanel } from '@moensun/antd-react-ext';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import DemoLine from '@/components/chart/Line';
import DemoPie from '@/components/chart/Pie';

const DevelopView: React.FC = () => {
    const navigate = useNavigate();
    return (
        <VPanel
            className={styles.wrapper}
            header={
                <AppToolbar
                    title={`已有组件`}
                    extra={
                        <>
                            <Button
                                type="primary"
                                onClick={() => {
                                    navigate('/');
                                }}
                            >
                                配置页面
                            </Button>
                        </>
                    }
                />
            }
        >
            <DemoLine />
            <DemoPie />
        </VPanel>
    );
};
export default DevelopView;

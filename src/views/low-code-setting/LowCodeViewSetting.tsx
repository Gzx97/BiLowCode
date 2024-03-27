import { AppToolbar, HPanel, VPanel } from '@moensun/antd-react-ext';
import { Button, Form } from 'antd';
import styles from './index.module.less';
import { useState } from 'react';
import LeftComponents from './leftComponents/LeftComponents';
import { LowCodeContextProvider } from './components/LargeScreenProvider';
import RightComponents from './rightComponents/RightComponents';
import LowCodeContent from './contentComponents/Content';
interface LowCodeViewSettingProps {
    isView?: boolean;
}
const LowCodeViewSetting: React.FC<LowCodeViewSettingProps> = ({ isView }) => {
    const [form] = Form.useForm();
    const designWidth = Form.useWatch('designWidth', { form, preserve: true });
    const designHeight = Form.useWatch('designHeight', {
        form,
        preserve: true,
    });
    const designBackgroundColor = Form.useWatch('designBackgroundColor', {
        form,
        preserve: true,
    });

    const [scale, setScale] = useState(1);

    return (
        <LowCodeContextProvider
            value={{
                designWidth: designWidth,
                designHeight: designHeight,
                designBackgroundColor: designBackgroundColor,
                scale,
                setScale: (scale) => {
                    setScale(scale);
                },
                form: form,
            }}
        >
            <Form form={form} className={styles.layoutView} layout="vertical">
                {isView && <LowCodeContent isView />}
                {!isView && (
                    <VPanel
                        header={
                            <AppToolbar
                                title={`BI-Demo`}
                                extra={
                                    <>
                                        <Button
                                            type="primary"
                                            onClick={() => {
                                                const formValues =
                                                    form.getFieldsValue(true);
                                                console.log(formValues);
                                            }}
                                        >
                                            提交
                                        </Button>
                                    </>
                                }
                            />
                        }
                    >
                        <HPanel
                            className={styles.layoutViewContent}
                            left={
                                <div className={styles.layoutViewSlider}>
                                    <LeftComponents />
                                </div>
                            }
                            right={
                                <div className={styles.layoutViewSlider}>
                                    <RightComponents />
                                </div>
                            }
                        >
                            <LowCodeContent />
                        </HPanel>
                    </VPanel>
                )}
            </Form>
        </LowCodeContextProvider>
    );
};
export default LowCodeViewSetting;

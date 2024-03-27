import React from 'react';
import { NamePath } from 'antd/es/form/interface';
import SizeForm from '@/components/SizeForm';

type PieConfigFormType = {
    namePath: NamePath;
};
const PieConfigForm: React.FC<PieConfigFormType> = ({ namePath }) => {
    return (
        <div>
            <SizeForm namePath={namePath} />
        </div>
    );
};
export default PieConfigForm;

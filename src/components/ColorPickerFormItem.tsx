import React from 'react';
import { ColorPicker } from 'antd';

type ColorPickerFormItemType = {
    value?: any;
    onChange?: (value: any) => void;
};
const ColorPickerFormItem: React.FC<ColorPickerFormItemType> = ({
    value,
    onChange,
}) => {
    return (
        <ColorPicker
            value={value}
            showText
            onChange={(color) => {
                onChange?.(color.toHexString());
            }}
            allowClear
        />
    );
};
export default ColorPickerFormItem;

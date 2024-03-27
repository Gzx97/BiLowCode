import { FormInstance } from 'antd';
import { createContext, useContext } from 'react';

interface LowCodeContextValue {
    designWidth: number;
    designHeight: number;
    designBackgroundColor?: string;
    scale: number;
    setScale: (scale: number) => void;
    form: FormInstance<any>;
    [key: string]: any;
}

const LowCodeContext = createContext<LowCodeContextValue>(
    {} as LowCodeContextValue
);

export const LowCodeContextProvider = LowCodeContext.Provider;
export const useLowCodeContext = (): LowCodeContextValue =>
    useContext(LowCodeContext);

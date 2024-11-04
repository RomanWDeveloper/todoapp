import { ThemeConfig, theme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = theme;

// общие настройки темы
const commonParams = {
    token: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
        fontSizeHeading1: 28,
        fontSizeHeading2: 22,
        fontSizeHeading3: 18,
        fontSizeHeading4: 16,
        fontSizeHeading5: 14,
        lineHeight: 1.35,
        controlHeight: 44,
    },

    components: {
        Button: {
            paddingInline: 17,
        },
        Input: {
            controlHeight: 48,
        },

        InputNumber: {
            controlHeight: 48,
            borderRadius: 4,
        },

        Select: {
            controlHeight: 48,
        },

        Switch: {
            trackHeight: 32,
            handleSize: 24,
            trackMinWidth: 62,
            trackPadding: 4,
        },
    }
}


export const dark: ThemeConfig = {
    algorithm: darkAlgorithm,

    ...commonParams
};


export const light: ThemeConfig = {
    algorithm: defaultAlgorithm,

    ...commonParams
};


export const Theme = {
    dark,
    light
}
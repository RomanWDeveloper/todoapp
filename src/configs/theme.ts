import { ThemeConfig } from 'antd';

const colorPrimary = '#F7F7F7';
const colorActive = '#8BC34A';
const colorHover = '#8BC34A';
const colorSecondary = '#8BC34A';
const colorText = '#000';

export const light: ThemeConfig = {
    token: {
        fontFamily: 'Roboto, sans-serif',

        fontSize: 16,

        fontSizeHeading1: 28,
        fontSizeHeading2: 22,
        fontSizeHeading3: 18,
        fontSizeHeading4: 16,
        fontSizeHeading5: 14,

        lineHeight: 1.35,
        colorText: colorText,

        colorBorder: colorPrimary,
        colorPrimary: colorActive,
        colorPrimaryActive: colorActive,
        colorPrimaryHover: colorHover,
        colorLink: colorActive,

        colorTextQuaternary: '#dbdbdb',
        colorTextTertiary: '#76767A',

        colorSplit: '#C5C5C5',

        controlHeight: 44,
        borderRadius: 8,
        borderRadiusSM: 4,

        colorTextPlaceholder: '#A7A7AA',
        colorBgMask: 'rgba(0, 0, 0, 0.5)',
    },
    components: {
        Typography: {
            fontWeightStrong: 500,
        },

        Badge: {
            textFontSize: 10,
            lineWidth: 0,
        },

        Button: {
            primaryColor: '#FFF',
            defaultColor: colorActive,
            paddingInline: 17,
            borderColorDisabled: colorActive,
            // colorPrimary: colorActive,
        },

        Switch: {
            trackHeight: 32,
            handleSize: 24,
            trackMinWidth: 62,
            trackPadding: 4,
        },

        Form: {
            verticalLabelPadding: '0 0 12px',
        },

        Input: {
            controlHeight: 48,
            colorTextDisabled: '#595959',
            borderRadius: 4,
            colorBorder: 'transparent',
        },

        InputNumber: {
            controlHeight: 48,
            borderRadius: 4,
            colorTextDisabled: '#595959',
            colorBorder: 'transparent',
        },

        Select: {
            colorBorder: 'transparent',
            multipleItemBg: colorSecondary,
            optionSelectedBg: colorSecondary,
            colorTextDisabled: '#595959',
            borderRadius: 4,
            controlHeight: 48,
        },

        Checkbox: {
            colorPrimary: colorActive,
            borderRadius: 18,
            colorBorder: colorActive,
            colorBgContainerDisabled: '#FFF',
            colorBgContainer: '#FFF',
        },

        Modal: {
            contentBg: colorSecondary,
            headerBg: colorSecondary,
            titleFontSize: 22,
        },

        Menu: {
            collapsedWidth: 10,            
            horizontalItemSelectedColor	: colorActive,
        },

        Tag: {
            colorBorder: '#76767a',
            defaultBg: '#f1f2f5',
        },

        DatePicker: {
            controlHeight: 50,
            colorTextDisabled: '#595959',
            borderRadius: 4,
            colorBorder: 'transparent',
            colorBorderSecondary: 'transparent',
        },
    },
};

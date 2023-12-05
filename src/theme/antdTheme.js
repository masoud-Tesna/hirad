/** @type {import('antd').ThemeConfig} */
import {tailwindTheme} from '@/theme/tailwindTheme';

const antdTheme = {
  token: {
    fontSize: 16,
    fontFamily: 'samimFont',
    colorPrimary: tailwindTheme.theme.extend.colors.secondary
  },
  components: {
    Form: {
      itemMarginBottom: 30
    },
    Input: {
      controlHeight: 56,
      colorBorder: tailwindTheme.theme.extend.colors.gray[40],
      activeBorderColor: tailwindTheme.theme.extend.colors.gray[50],
      hoverBorderColor: tailwindTheme.theme.extend.colors.gray[50],
      borderRadius: 4,
      activeShadow: tailwindTheme.theme.extend.boxShadow[2]
    },
    Select: {
      controlHeight: 56,
      colorBorder: tailwindTheme.theme.extend.colors.gray[40],
      colorPrimary: tailwindTheme.theme.extend.colors.gray[50],
      colorPrimaryHover: tailwindTheme.theme.extend.colors.gray[50],
      borderRadius: 4
    },
    Modal: {
      boxShadow: '0 6px 22px 0 rgba(0, 0, 0, .25)',
      marginXS: 25,
      borderRadiusLG: 0,
      colorBgMask: 'rgba(0, 0, 0, 0.50)'
    },
    Checkbox: {
      colorText: tailwindTheme.theme.extend.colors.gray[40],
      colorBorder: tailwindTheme.theme.extend.colors.gray[40],
      colorPrimary: tailwindTheme.theme.extend.colors.gray[50],
      colorPrimaryHover: tailwindTheme.theme.extend.colors.gray[40],
      borderRadiusSM: 2
    },
    Button: {
      borderRadius: 0
    }
  }
};

export {antdTheme};

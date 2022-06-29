import { myQvtFoTheme } from "features/theme/MyQvtFoTheme"

export const muiMyQvtFoVariables = {
  palette: {
    error: {
      main: myQvtFoTheme.colors.danger,
    },
    primary: {
      light: myQvtFoTheme.colors.primaryLight,
      main: myQvtFoTheme.colors.primary,
    },
    secondary: {
      main: myQvtFoTheme.colors.secondary,
    },
    tertiary: {
      light: myQvtFoTheme.colors.green,
      primary: myQvtFoTheme.colors.success,
    },
    text: {
      disabled: myQvtFoTheme.colors.grey300,
      light: myQvtFoTheme.colors.grey200,
      primary: myQvtFoTheme.colors.black,
    },
  },
  sizes: {
    borderRadius: myQvtFoTheme.sizes.borderRadius,
    borderRadiusRounded: myQvtFoTheme.sizes.borderRadiusRounded,
  },
  typography: {
    fontFamily: myQvtFoTheme.typography.textFontFamily,
    fontSize: {
      caption: myQvtFoTheme.typography.fontSizeTextExtraSmall,
      text: {
        small: myQvtFoTheme.typography.fontSizeTextSmall,
      },
      title: {
        dialog: myQvtFoTheme.typography.fontSizeTitle,
      },
    },
  },
}

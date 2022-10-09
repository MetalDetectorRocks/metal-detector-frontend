import { createTheme } from '@mui/material'

const darkThemeColorScheme = {
  bodyBackground: '#02040A',
  primaryBackground: '#0b0e13',
  primaryForeground: '#d3d3d3',
  mutedForeground: '#818181',
  primaryBorder: '#2c3138',
  secondaryBorder: '#bebebe',
  primaryHighlight: '#bebebe',
  secondaryHighlight: 'rgba(44, 49, 56, 0.35)',
  menuForeground: '#fcfcfc',
}

export const colorScheme = darkThemeColorScheme
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: colorScheme.primaryBackground,
    },
    secondary: {
      main: colorScheme.primaryForeground,
    },
    background: {
      paper: colorScheme.primaryBackground,
    },
    text: {
      primary: colorScheme.primaryForeground,
      disabled: colorScheme.mutedForeground,
    },
    divider: colorScheme.primaryBorder,
  },
  components: {
    // TODO DanielW: should be overridden in scss
    MuiButton: {
      defaultProps: {
        sx: {
          color: 'white',
          borderColor: colorScheme.secondaryBorder,
          textTransform: 'none',
          '&:hover': {
            color: 'white',
            borderColor: colorScheme.primaryHighlight,
            backgroundColor: colorScheme.secondaryHighlight,
          },
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          color: colorScheme.menuForeground,
          '&:hover': {
            backgroundColor: colorScheme.secondaryHighlight,
          },
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          color: colorScheme.primaryForeground,
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        sx: {
          color: 'white',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1050,
      lg: 1280,
      xl: 1536,
    },
  },
})

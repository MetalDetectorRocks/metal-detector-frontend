import { createTheme } from '@mui/material'

const darkThemeColorScheme = {
  primaryBackground: '#0b0e13',
  primaryForeground: '#d3d3d3',
  mutedForeground: '#818181',
  primaryBorder: '#2c3138',
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

import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
    },
    secondary: {
      main: '#38BDF8',
      light: '#7DD3FC',
      dark: '#0284C7',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    background: {
      default: '#0D0D0D',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#A3A3A3',
    },
  },
  typography: {
    h4: { fontWeight: 800, letterSpacing: '0.02em' },
    h5: { fontWeight: 700, letterSpacing: '0.01em' },
    h6: { fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' },
    caption: { textTransform: 'uppercase', letterSpacing: '0.05em' },
  },
  overrides: {
    MuiPaper: {
      rounded: { borderRadius: 8 },
    },
    MuiButton: {
      root: { borderRadius: 6, fontWeight: 700, textTransform: 'uppercase' },
    },
    MuiAppBar: {
      colorPrimary: { backgroundColor: '#0D0D0D' },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#B91C1C',
      light: '#DC2626',
      dark: '#991B1B',
    },
    secondary: {
      main: '#0369A1',
      light: '#0284C7',
      dark: '#075985',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#D97706',
      light: '#F59E0B',
      dark: '#B45309',
    },
    background: {
      default: '#EDEDED',
      paper: '#F7F7F7',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#525252',
    },
  },
  typography: {
    h4: { fontWeight: 800, letterSpacing: '0.02em' },
    h5: { fontWeight: 700, letterSpacing: '0.01em' },
    h6: { fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' },
    caption: { textTransform: 'uppercase', letterSpacing: '0.05em' },
  },
  overrides: {
    MuiPaper: {
      rounded: { borderRadius: 8 },
    },
    MuiButton: {
      root: { borderRadius: 6, fontWeight: 700, textTransform: 'uppercase' },
    },
    MuiAppBar: {
      colorPrimary: { backgroundColor: '#1A1A1A' },
    },
  },
});

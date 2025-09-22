import { createTheme, alpha } from '@mui/material/styles';

// Apple-inspired color palette
const appleColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: {
    light: '#FFFFFF',
    dark: '#000000',
    paper: {
      light: '#F2F2F7',
      dark: '#1C1C1E',
    }
  },
  text: {
    primary: {
      light: '#000000',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#3C3C43',
      dark: '#EBEBF5',
    }
  },
  divider: {
    light: '#C6C6C8',
    dark: '#38383A',
  }
};

const createAppleTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: appleColors.primary,
      light: mode === 'light' ? '#66B2FF' : '#0A84FF',
      dark: mode === 'light' ? '#0051D0' : '#0056CC',
    },
    secondary: {
      main: appleColors.secondary,
      light: mode === 'light' ? '#7B7ADB' : '#6366F1',
      dark: mode === 'light' ? '#3F3E9F' : '#4338CA',
    },
    background: {
      default: mode === 'light' ? appleColors.background.light : appleColors.background.dark,
      paper: mode === 'light' ? appleColors.background.paper.light : appleColors.background.paper.dark,
    },
    text: {
      primary: mode === 'light' ? appleColors.text.primary.light : appleColors.text.primary.dark,
      secondary: mode === 'light' ? appleColors.text.secondary.light : appleColors.text.secondary.dark,
    },
    divider: mode === 'light' ? appleColors.divider.light : appleColors.divider.dark,
    success: { main: appleColors.success },
    warning: { main: appleColors.warning },
    error: { main: appleColors.error },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Display',
      'SF Pro Text',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 122, 255, 0.25)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${appleColors.primary} 0%, ${appleColors.secondary} 100%)`,
          color: 'white',
          boxShadow: '0 4px 14px rgba(0, 122, 255, 0.2)',
          '&:hover': {
            background: `linear-gradient(135deg, ${appleColors.primary} 0%, ${appleColors.secondary} 100%)`,
            filter: 'brightness(1.1)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: alpha(appleColors.primary, 0.08),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: mode === 'light' 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(28, 28, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          border: mode === 'light' 
            ? '1px solid rgba(0, 0, 0, 0.08)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: mode === 'light'
              ? '0 20px 40px rgba(0, 0, 0, 0.15)'
              : '0 20px 40px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: mode === 'light' 
            ? '1px solid rgba(0, 0, 0, 0.08)' 
            : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export const lightTheme = createAppleTheme('light');
export const darkTheme = createAppleTheme('dark');
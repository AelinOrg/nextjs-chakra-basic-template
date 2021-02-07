import { theme, ChakraTheme } from '@chakra-ui/react'

const customTheme: ChakraTheme = {
  ...theme,
  // custom theme here
  fonts: {
    body: '<choose>, system-ui, sans-serif',
    heading: '<choose>, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights
  },
  radii: {
    // border-radius
    ...theme.radii,
    sm: '2rem',
    md: '4rem',
  }
}

export default customTheme;
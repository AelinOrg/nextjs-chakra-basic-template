import React from 'react'

import { ThemeProvider as ChakraThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react'

import { ThemeProvider as EmotionThemingProvider } from '@emotion/react'

import customTheme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={customTheme}>
      <ColorModeProvider options={{initialColorMode: 'dark', useSystemColorMode: true }}>
        <EmotionThemingProvider theme={customTheme}>
          <CSSReset />
          {children}
        </EmotionThemingProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}

export default ThemeContainer;
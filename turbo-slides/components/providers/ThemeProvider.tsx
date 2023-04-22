import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default ThemeProvider

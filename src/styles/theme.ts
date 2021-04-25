declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string
    secondaryColor: string
    containerColor: string
    backgroundColor: string
  
    containerMinWidth: string
    containerMaxWidth: string
    containerShadow: string

    cardShadow: string
  }
}

const defaultTheme = {
  primaryColor: '#eb508b',
  secondaryColor: '#fff',
  containerColor: '#fff',
  backgroundColor: '#ffe3ff',

  containerMinWidth: '320px',
  containerMaxWidth: '1000px',
  containerShadow: '19px 20px 41px -18px rgba(100,0,100,0.5)',

  cardShadow:  '1px 1px 8px -3px rgba(100,0,100,0.5)'
}

export default defaultTheme;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: {
        default: string,
        subtle: string,
        emphasized: string,
      },
      border: {
        default: string,
        emphasized: string,
      },
    },
    shadow: {
      default: string,
    }
  }
}
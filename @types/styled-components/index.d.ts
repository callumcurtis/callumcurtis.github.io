import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: {
        subtle: string,
        muted: string,
        default: string,
        emphasized: string,
      },
      border: {
        default: string,
        emphasized: string,
      },
      foreground: {
        muted: string,
      },
    },
    shadow: {
      default: string,
    }
  }
}
import {
  css, DefaultTheme, FlattenInterpolation, ThemedStyledProps,
} from 'styled-components';

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

export const normalDesktop = (inner: FlattenInterpolation<ThemedStyledProps<any, AnyIfEmpty<DefaultTheme>>>) => css`
    @media (max-width: 1440px) {
      ${inner};
    }
`;
export const smallDesktop = (inner: FlattenInterpolation<ThemedStyledProps<any, AnyIfEmpty<DefaultTheme>>>) => css`
    @media (max-width: 1280px) {
        ${inner};
    }
`;

export const tablet = (inner: FlattenInterpolation<ThemedStyledProps<any, AnyIfEmpty<DefaultTheme>>>) => css`
    @media (max-width: 1024px) {
      ${inner};
    }
`;

export const phone = (inner:FlattenInterpolation<ThemedStyledProps<any, AnyIfEmpty<DefaultTheme>>>) => css`
    @media (max-width: 650px) {
      ${inner};
    }
  `;
export const fixedHeight = (inner: FlattenInterpolation<ThemedStyledProps<{}, AnyIfEmpty<DefaultTheme>>> | any) => css`
    @media (max-height: 840px) {
      ${inner};
    }
  `;

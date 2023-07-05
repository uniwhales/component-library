import {
  css,
} from 'styled-components';

/* Breakpoints top ranges Phone 0 - 656, tablet 656-1024 etc. */
export const WidthBreakpoints = Object.freeze({
  Phone: { bottom: 0, top: 656 },
  Tablet: { bottom: 657, top: 1024 },
  SmallDesktop: { bottom: 1025, top: 1280 },
  Desktop: { bottom: 1281, top: 1440 },
  BigDesktop: { bottom: 1441, top: 99999 },
});

export const HeightBreakpoints = Object.freeze({
  FixedHeight: { bottom: 0, top: 840 },
});

// type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;
// old type: (inner: FlattenInterpolation<ThemedStyledProps<any, AnyIfEmpty<DefaultTheme>>>)
export const normalDesktop = (inner: any) => css`
    @media (max-width: ${WidthBreakpoints.Desktop.top}px) {
      ${inner};
    }
`;
export const smallDesktop = (inner: any) => css`
    @media (max-width: ${WidthBreakpoints.SmallDesktop.top}px) {
        ${inner};
    }
`;

export const tablet = (inner: any) => css`
    @media (max-width: ${WidthBreakpoints.Tablet.top}px) {
      ${inner};
    }
`;

export const phone = (inner:any) => css`
    @media (max-width: ${WidthBreakpoints.Phone.top}px) {
      ${inner};
    }
  `;

export const fixedHeight = (inner: any) => css`
    @media (max-height: ${HeightBreakpoints.FixedHeight.top}px) {
      ${inner};
    }
  `;

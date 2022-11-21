import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const Microscope = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 24 24"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path
      d="M19.454 20.174h-4.727c.091-.183.091-.365.091-.548a7.256 7.256 0 004.546-6.757c0-1.826-.728-3.56-1.91-4.93L18 7.39c.09-.091.182-.183.182-.365l.636-1.918c.091-.365 0-.73-.182-.913l-1.909-1.917c-.273-.274-.636-.366-.909-.183L14 2.643c-.09 0-.273.091-.364.182L7.818 8.67a.885.885 0 000 1.278l-1.273 1.279a.885.885 0 000 1.278l1.91 1.918a.876.876 0 001.272 0L11 13.143a.876.876 0 001.273 0l4-3.926c.909 1.004 1.363 2.283 1.363 3.652 0 2.1-1.272 4.018-3.181 4.93-.819-1.277-2.455-1.734-3.728-.912-.363.274-.727.548-.909 1.004-.363-.182-.727-.274-1-.548a.876.876 0 00.637-.821c0-.548-.364-.913-.91-.913H4.91c-.545 0-.909.365-.909.913 0 .547.364.913.91.913h1.18c.91 1.004 2.092 1.826 3.365 2.282 0 .183.09.366.09.457H4.91c-.545 0-.909.365-.909.913s.364.913.91.913h14.544c.546 0 .91-.365.91-.913a.913.913 0 00-.91-.913zm-10.363-7.67l-.636-.64.636-.638.636.639-.636.639zm3.09 7.67c-.545 0-.908-.365-.908-.913s.363-.913.909-.913c.545 0 .909.365.909.913s-.364.913-.91.913z"
    />
  </svg>
);

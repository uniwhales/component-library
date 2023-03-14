import React from 'react';
import { SvgLinearGradient } from '../../svgGradientProvider';
import { SvgGradients } from '../../../../theme';

export const PlanetStandard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 12 11"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path
      d="M11.25 5.5c0 2.9-2.35 5.25-5.25 5.25S.75 8.4.75 5.5 3.1.25 6 .25s5.25 2.35 5.25 5.25zM8.033 7.127a.747.747 0 00-.19-.461l-.289-.29a.677.677 0 00-.479-.198h-1.41c-.198-.1-.451-.678-.677-.678-.226 0-.443-.054-.642-.154l-.235-.117a.264.264 0 01-.144-.226c0-.1.081-.208.172-.244l.66-.217s.071-.018.108-.018c.072 0 .171.036.226.081l.198.172s.073.045.109.045h.117a.171.171 0 00.154-.244l-.334-.66s-.019-.054-.019-.072c0-.036.028-.09.055-.117l.207-.208s.073-.045.118-.045h.19s.09-.018.117-.054l.172-.172c.063-.063.063-.172 0-.244l-.1-.1c-.063-.063-.063-.171 0-.243l.217-.217.1-.1a.333.333 0 000-.479l-.597-.596c-.171 0-.343.027-.515.054v.235a.34.34 0 01-.488.307l-.506-.253a4.25 4.25 0 00-2.186 2.16c.207.316.533.795.731 1.084.09.136.263.335.38.443l.018.018c.199.181.425.335.669.461.298.154.732.389 1.03.551a.674.674 0 01.352.597v.677c0 .181.073.353.2.48.315.316.514.822.478 1.084v.578c.307 0 .614-.036.904-.1l.37-.993c.045-.118.072-.235.1-.362a.582.582 0 01.135-.226l.235-.235c.163-.162.29-.47.29-.695v-.01zm2.16-1.085a4.158 4.158 0 00-.416-2.43l-.271.135a.519.519 0 00-.199.172l-.415.623a.626.626 0 00-.082.28c0 .082.036.208.082.28l.38.57c.071.108.18.18.297.208l.615.153.009.01z"
    />
  </svg>
);

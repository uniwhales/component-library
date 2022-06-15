import { TooltipProps } from 'react-tooltip';

export type HintsAndHoversProps = {
  id: string
  place?: TooltipProps['place']
  hint: string | JSX.Element
};

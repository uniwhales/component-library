import { CardProps } from '../../atoms/card/types';

export type StickyActionBarProps = {
  withTransform?: boolean
  icon?: JSX.Element
  left?: JSX.Element
  right?: JSX.Element
  index?: number
  cardProps?: CardProps
  mt:string
  rootMargin?: number
};

export type StickyActionBarWrapperProps = Pick<StickyActionBarProps, 'withTransform' | 'index'> & {
  isOnEdge: boolean
} & CardProps;

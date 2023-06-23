import { CarouselProps as OriginalCarouselProps } from 'react-responsive-carousel';

export type CarouselProps = OriginalCarouselProps & {
  children: JSX.Element[];
  borderRadius?: string;
  onChange: (index: number) => void;
};

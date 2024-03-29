import { Carousel } from 'react-responsive-carousel';
import { Styled } from '../../theme';
import { CarouselProps } from './types';

export const CustomCarousel = Styled(Carousel)<{ borderRadius: CarouselProps['borderRadius'] }>`
    .carousel-slider {
        height: inherit;
    }

    .slider-wrapper {
        border-radius: ${({ borderRadius }) => borderRadius ?? '0 0 0 15px'};
    }
`;

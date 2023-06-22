import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';
import { CarouselProps } from './types';

export const CustomCarousel = styled(Carousel)<{ borderRadius: CarouselProps['borderRadius'] }>`
    .carousel-slider {
        height: inherit;
    }

    .slider-wrapper {
        border-radius: ${({ borderRadius }) => borderRadius ?? '0 0 0 15px'};
    }
`;

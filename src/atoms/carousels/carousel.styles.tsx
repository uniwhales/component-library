import { Carousel as OriginalCarousel, CarouselProps as OriginalCarouselProps } from 'react-responsive-carousel';
import { styled } from 'styled-components';

export const CustomCarousel = styled(OriginalCarousel)<OriginalCarouselProps & { borderRadius?: string }>`
    .carousel-slider {
        height: inherit;
    }

    .slider-wrapper {
        border-radius: ${({ borderRadius }) => borderRadius ?? '0 0 0 15px'};
    }
`;

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel } from './carousel';
import { Styled } from '../../theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default {
  title: 'Atoms/Carousel',
  component: Carousel,
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Wrapper = Styled.div`
    height: 500px;
    margin-left: 100px;
    margin-top: 100px;
`;

const Image = Styled.div<{ imgUrl: string }>`
    background-image: ${({ imgUrl }) => `url(${imgUrl})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
`;

const Imgs = [
  'https://d1yaedilx42rkd.cloudfront.net/media/original_images/arbi.jpg',
  'https://d1yaedilx42rkd.cloudfront.net/media/original_images/Social_Sonar_Cover_Template_P5nfmSI.jpg',
  'https://d1yaedilx42rkd.cloudfront.net/media/original_images/dunefinal.jpg',
];

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Wrapper>
    <Carousel borderRadius="0" {...args}>{Imgs.map((i) => <Image imgUrl={i} />)}</Carousel>
  </Wrapper>
);
export const RegularCarousel = Template.bind({});

RegularCarousel.parameters = {
  backgrounds: { default: 'dark' },
};

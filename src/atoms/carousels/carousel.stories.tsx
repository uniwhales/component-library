import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { Carousel } from './carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Wrapper = styled.div`
    height: 500px;
    margin-left: 100px;
    margin-top: 100px;
`;

const Image = styled.div<{ imgUrl: string }>`
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

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const RegularCarousel: Story = {
  render: (args) => (
    <Wrapper>
      <Carousel borderRadius="0" {...args}>{Imgs.map((i) => <Image key={i} imgUrl={i} />)}</Carousel>
    </Wrapper>
  ),
};

RegularCarousel.parameters = {
  backgrounds: { default: 'dark' },
};

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Text } from '../Text';
import { Color, FontSize, THEME } from '../../Theme';

describe('<Text />', () => {
  test('should display Text with SystemGreen color', async () => {
    const systemGreenText = render(
      <Text textColor={Color.SystemGreen} size={FontSize.Body}>test-text-1</Text>,
    );
    const element = await systemGreenText.findByText('test-text-1');
    expect(element).toHaveStyle(`color: ${THEME.colors.SystemGreen}`);
    expect(element).toHaveStyle(`font-size: ${THEME.sizes.Body}`);
  });
});

import React, { useState, useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ChevronDownIcon, ChevronUpIcon, CoinStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Slider } from '../../atoms/slider/slider';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  Arrow, ButtonContainer, Container, Details, MinUsdButton, MinUsdButtonContent, Value, ValueRow,
} from './styles';
import { MinUsdProps } from './types';

export const MinUsdSlider = ({
  min, max, onApply,
}: MinUsdProps) => {
  const theme = localTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));

  const handleApply = () => {
    onApply();
    setIsOpen(false);
  };
  return (
    <Container ref={clickRef}>
      <MinUsdButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <MinUsdButtonContent>
          <IconWrapper cursor="pointer" icon={<CoinStandard />} />
          Min. USD
        </MinUsdButtonContent>
        <IconWrapper cursor="pointer" icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} />
      </MinUsdButton>
      {isOpen && (
        <>
          <Arrow />
          <Details>
            <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">Set a min. value (USD) for transactions</Text>
            <ValueRow>
              <Slider
                min={min}
                max={max}
                value={sliderValue}
                onInput={(e) => setSliderValue(parseInt(e.target.value, 10))}
                showMaxButton={false}
              />
              <Value>
                <Text size="S-Regular" color={theme.containerAndCardShades.SHADE_PLUS_2}>{sliderValue}</Text>
                <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>USD</Text>
              </Value>
            </ValueRow>
            <ButtonContainer>
              <ButtonAtom
                buttonVariant="primary"
                onClick={handleApply}
              >
                Apply
              </ButtonAtom>
              <ButtonAtom
                buttonVariant="secondary"
                onClick={() => setSliderValue(0)}
              >
                Clear
              </ButtonAtom>
            </ButtonContainer>
          </Details>
        </>
      )}
    </Container>
  );
};

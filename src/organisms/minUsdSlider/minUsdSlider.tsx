import React, { useState, useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ChevronDownIcon, ChevronUpIcon, CoinStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Slider } from '../../atoms/slider/slider';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  Arrow,
  ButtonContainer,
  Container,
  Details,
  MinUsdButton,
  MinUsdButtonContent,
  TextRow,
  Value,
  ValueRow,
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

  const onApplyClicked = () => {
    onApply(sliderValue);
    setIsOpen(false);
  };
  return (
    <Container ref={clickRef}>
      <MinUsdButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <MinUsdButtonContent>
          <IconWrapper width="12px" cursor="pointer" icon={<CoinStandard />} />
          Min. USD
        </MinUsdButtonContent>
        <IconWrapper width="12px" cursor="pointer" icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} />
      </MinUsdButton>
      {isOpen && (
        <>
          <Arrow />
          <Details>
            <TextRow>
              <Text color={theme.textShades.SHADE_MINUS_2} size="Caption-Regular">
                Set a
                {' '}
              </Text>
              <Text size="Caption-Bold" color={theme.textShades.SHADE_MINUS_2}>
                min. value (USD)
                {' '}
              </Text>
              <Text size="Caption-Regular" color={theme.textShades.SHADE_MINUS_2}>for transactions</Text>
            </TextRow>
            <ValueRow>
              <Slider
                min={min}
                max={max}
                value={sliderValue}
                onInput={(e) => setSliderValue(parseInt(e.target.value, 10))}
                showMaxButton={false}
              />
              <Value>
                <Text size="S-Regular" color={theme.containerAndCardShades.SHADE_PLUS_2}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(sliderValue)}</Text>
                <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>USD</Text>
              </Value>
            </ValueRow>
            <ButtonContainer>
              <ButtonAtom
                buttonVariant="primary"
                onClick={onApplyClicked}
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

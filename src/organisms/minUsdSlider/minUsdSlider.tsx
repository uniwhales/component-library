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
} from './styles';
import { MinUsdProps } from './types';

export const MinUsdSlider = ({
  min, max, onApply,
}: MinUsdProps) => {
  const theme = localTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState('0');
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));

  const onApplyClicked = () => {
    if (!sliderValue) return;
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
            <Slider
              min={min}
              max={max}
              value={sliderValue ?? 0}
              setValue={setSliderValue}
              onInput={(e) => setSliderValue(e.target.value)}
              unit="USD"
            />
            <ButtonContainer>
              <ButtonAtom
                buttonVariant="primary"
                onClick={onApplyClicked}
              >
                Apply
              </ButtonAtom>
              <ButtonAtom
                buttonVariant="secondary"
                onClick={() => setSliderValue('0')}
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

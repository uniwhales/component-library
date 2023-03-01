import React, { useState, useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ChevronDownIcon, ChevronUpIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Slider } from '../../atoms/slider/slider';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  Arrow,
  ButtonContainer,
  Container,
  Details,
  MinUsdButton,
  MinUsdButtonContent,
} from './styles';
import { MinUsdProps } from './types';

export const DropdownSlider = ({
  min, max, onApply, buttonText, buttonIcon, description, unit,
}: MinUsdProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState('0');
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));

  const onApplyClicked = () => {
    if (!sliderValue) return;
    onApply(sliderValue);
    setIsOpen(false);
  };

  const valueIsTooLarge = Number(sliderValue) > max;
  const valueIsEmpty = sliderValue === '';
  return (
    <Container ref={clickRef}>
      <MinUsdButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <MinUsdButtonContent>
          {buttonIcon && <IconWrapper width="12px" cursor="pointer" icon={buttonIcon} />}
          {buttonText}
        </MinUsdButtonContent>
        <IconWrapper width="12px" cursor="pointer" icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} />
      </MinUsdButton>
      {isOpen && (
        <>
          <Arrow />
          <Details>
            {description}
            <Slider
              min={min}
              max={max}
              value={sliderValue}
              setValue={setSliderValue}
              onInput={(e) => setSliderValue(e.target.value)}
              unit={unit}
              hasError={valueIsEmpty || valueIsTooLarge}
              errorMessage={valueIsEmpty ? 'Please enter a value' : valueIsTooLarge ? `Max number is ${max}` : undefined}
            />
            <ButtonContainer>
              <ButtonAtom
                buttonVariant="primary"
                onClick={onApplyClicked}
                disabled={valueIsEmpty || valueIsTooLarge}
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

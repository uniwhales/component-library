import React, { useState, useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Overlay } from '../../atoms/common/overlay';
import { ChevronDownIcon, ChevronUpIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Slider } from '../../atoms/slider/slider';
import { useClickOutside } from '../../utils/useClickOutside';
import useEnter from '../../utils/useEnter';
import useEscape from '../../utils/useEscape';
import {
  Arrow,
  ButtonContainer,
  Container,
  Details,
  InnerContainer,
  MinUsdButton,
  MinUsdButtonContent,
  OpenContainer,
} from './styles';
import { MinUsdProps } from './types';

export const DropdownSlider = ({
  min, max, onApply,
  buttonText, buttonIcon,
  buttonWidth, buttonHeight,
  description, unit, sliderValue, setSliderValue,
}: MinUsdProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));
  // validation
  const valueIsTooLarge = Number(sliderValue) > max;
  const valueIsEmpty = sliderValue === '';
  // Close on escape press
  useEscape(() => setIsOpen(false));

  const onApplyClicked = () => {
    if (!sliderValue) return;
    onApply(sliderValue);
    setIsOpen(false);
  };
  // Handle enter press
  useEnter(() => {
    if (!isOpen || valueIsTooLarge || valueIsEmpty) return;
    onApply(sliderValue);
    setIsOpen(false);
  });

  return (
    <>
      {isOpen && <Overlay />}
      <Container ref={clickRef}>
        <MinUsdButton
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          height={buttonHeight}
          width={buttonWidth}
        >
          <InnerContainer>
            <MinUsdButtonContent>
              {buttonIcon && <IconWrapper height="20px" width="20px" cursor="pointer" icon={buttonIcon} />}
              {buttonText}
            </MinUsdButtonContent>
            <IconWrapper
              width="20px"
              height="20px"
              cursor="pointer"
              icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              pointerEvents={false}
            />
          </InnerContainer>
        </MinUsdButton>
        {isOpen && (
        <OpenContainer>
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
              errorMessage={valueIsEmpty ? 'Must be a value' : valueIsTooLarge ? `Max: ${max}` : undefined}
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
        </OpenContainer>
        )}
      </Container>
    </>
  );
};

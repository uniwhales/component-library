import React, {
  useState, useRef, useImperativeHandle, forwardRef,
} from 'react';
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

export type SliderRef = {
  resetSlider: () => void;
};

export const DropdownSlider = forwardRef<SliderRef, MinUsdProps>(({
  min, max, onApply,
  buttonText, buttonIcon,
  buttonWidth, buttonHeight,
  description, unit, useLogarithmic,
}, ref) => {
  const [sliderValue, setSliderValue] = useState('0');
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsOpen(false));
  // validation
  const valueIsTooLarge = Number(sliderValue) > max;
  const valueIsEmpty = sliderValue === '';
  // Close on escape press
  useEscape(() => setIsOpen(false));

  const onApplyClicked = () => {
    // check if no value, value greater than max or NaN
    if (!sliderValue || valueIsTooLarge || Number.isNaN(Number(sliderValue))) return;
    onApply(sliderValue);
    setIsOpen(false);
  };
  // Handle enter press
  useEnter(() => {
    // check if no value, value greater than max or NaN
    if (!isOpen || !sliderValue || valueIsTooLarge || Number.isNaN(Number(sliderValue))) return;
    onApply(sliderValue);
    setIsOpen(false);
  });
  useImperativeHandle(ref, () => ({
    resetSlider() {
      setSliderValue('0');
    },
  }));

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
              pointerEvents="none"
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
                useLogarithmic={useLogarithmic}
              />
              <ButtonContainer>
                <ButtonAtom
                  buttonVariant="primary"
                  onClick={onApplyClicked}
                  disabled={valueIsEmpty || valueIsTooLarge || Number.isNaN(Number(sliderValue))}
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
});

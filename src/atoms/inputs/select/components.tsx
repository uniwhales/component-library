import { styled } from 'styled-components';

export const SelectWrapper = styled.div<{ width?: string, $isDisabled: boolean, error: boolean }>`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  margin-bottom: ${({ error }) => error && '4px'};
    &:hover {
    div.react-select__placeholder {
      /* target placeholder when we have a custom component with icon
      have not been able to find another way of targeting this than
      overriding like this. */
      p {
        color: ${({ theme, $isDisabled }) => !$isDisabled && theme.colors.SHADE_MINUS_3};
      };
    };
    input {
      &::placeholder {
        color: ${({ theme, $isDisabled }) => !$isDisabled && theme.colors.SHADE_MINUS_3};
      };
    };
  };
`;

export const ErrorMessageContainer = styled.div`
  position: absolute;
  right: 0;
`;

export const Placeholder = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`;

export const OptionWrapper = styled.div<{ $isSelected: boolean, $hasGroups: boolean, $showOnTop?: boolean, $isLastGroup?: boolean }>`
  zIndex: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.MAIN_BLUE : theme.colors.SHADE_PLUS_2)};
  &:hover {
    background-color: ${({ theme, $isSelected }) => !$isSelected && theme.colors.SHADE_MINUS_1};
  }
  &:first-of-type {
    border-radius: ${({ $showOnTop, $hasGroups }) => ($showOnTop && !$hasGroups && '12px 12px 0 0')};
  }
  &:last-of-type {
    border-radius: ${({ $showOnTop, $isLastGroup }) => (!$showOnTop && $isLastGroup && '0 0 12px 12px')};
  }
`;

export const OptionLabelContainer = styled.label<{ $addPadding: boolean, $smallText?: boolean, $isSelected: boolean }>`
  padding-left: ${({ $addPadding }) => $addPadding && '24px'};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  word-break: break-all;
  font-size: ${({ $smallText }) => $smallText && '12px'};
  color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.WHITE : theme.colors.SHADE_MINUS_2)};
  &:hover {
    color: ${({ theme }) => theme.colors.WHITE};
  };
`;

export const ClearButtonContainer = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

export const ClearWrapper = styled.div``;

export const Required = styled.span<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) => (disabled ? theme.colors.SHADE_PLUS_1 : theme.colors.RED)};
`;

export const CheckboxOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SingleValueComponent = styled.div<{ $isFocused: boolean, $isDisabled: boolean }>`
  color: ${({ theme, $isFocused, $isDisabled }) => ($isDisabled ? theme.colors.SHADE_PLUS_1 : $isFocused ? theme.colors.WHITE : theme.colors.SHADE_MINUS_2)};
`;

export const ControlComponent = styled.div<{ $menuIsOpen: boolean, $isFocused: boolean, $isDisabled: boolean, error: boolean, $showOnTop?: boolean }>`
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 0 10px 0 10px;
  box-shadow: none;
  border-radius: ${({ $menuIsOpen, $isFocused, $showOnTop }) => ($menuIsOpen && $isFocused && $showOnTop ? '0 0 12px 12px' : $menuIsOpen && $isFocused && !$showOnTop ? '12px 12px 0 0 ' : '12px')};
  height: 40px;
  background: ${({ theme, $isFocused, $isDisabled }) => ($isFocused
    ? theme.colors.MAIN_BLUE : $isDisabled
      ? theme.colors.SHADE_PLUS_3
      : theme.colors.BG_SHADE_PLUS_4)};
  border: ${({ theme, error, $isDisabled }) => ($isDisabled ? `1px solid ${theme.colors.BG_SHADE_PLUS_4}` : error ? `1px solid ${theme.colors.RED}` : `1px solid ${theme.colors.SHADE_MINUS_1}`)};
  color: ${({ theme, $isFocused, $isDisabled }) => ($isDisabled ? theme.colors.SHADE_PLUS_1 : $isFocused ? theme.colors.WHITE : theme.colors.SHADE_MINUS_2)};
  font-weight: ${({ $isFocused }) => ($isFocused ? 'bold' : 'normal')};
  svg {
    fill: ${({ theme, $isFocused }) => $isFocused && theme.colors.WHITE};
  };
  &:hover {
    border: ${({ theme, error, $isDisabled }) => ($isDisabled ? '1px solid transparent' : error ? `1px solid ${theme.colors.RED}` : `1px solid ${theme.colors.SHADE_MINUS_2}`)};
    svg {
      fill: ${({ theme, $isFocused }) => ($isFocused ? theme.colors.WHITE : theme.colors.SHADE_MINUS_3)};
    };
  };
`;

export const MenuListComponent = styled.div<{ $showOnTop?: boolean }>`
  background: ${({ theme }) => theme.colors.SHADE_PLUS_2};
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  padding-top: 0;
  border-radius: ${({ $showOnTop }) => ($showOnTop ? '10px 10px 0px 0px' : '0px 0px 10px 10px')};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
`;

export const MultiValueComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.SHADE_PLUS_2};
  color:  ${({ theme }) => theme.colors.SHADE_MINUS_2};
  border-radius: 12px;
  border: 2px solid transparent;
  display: flex;
  margin-right: 6px;
  padding: 0 6px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  cursor: pointer;
  &:hover: {
    background: ${({ theme }) => theme.colors.SHADE_MINUS_1};
    color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  }
  &:active: {
    background: ${({ theme }) => theme.colors.SHADE_MINUS_1};
    color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
    border: ${({ theme }) => `2px solid ${theme.colors.YELLOW}`};
  }
  svg: {
    transform: unset;
    height: 12px;
    width: 12px;
  }
`;

export const MultiValueRemoveComponent = styled.div`
    border-radius: 50%;
    padding: 2px;
    svg: {
      fill: ${({ theme }) => theme.colors.SHADE_MINUS_2};
    };
    &:hover: {
      svg: {
      fill: ${({ theme }) => theme.colors.SHADE_MINUS_3};
      };
    };
`;

export const GroupHeadingComponent = styled.div`
  background: ${({ theme }) => theme.colors.SHADE_PLUS_1};
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  padding: 8px 16px;
  margin-bottom: 0;
`;

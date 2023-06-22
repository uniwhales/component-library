import React, { } from 'react';
import {
  components,
} from 'react-select';
import { styled } from 'styled-components';
import { ButtonAtom } from '../../../atoms/buttons/button';
import { SearchStandard } from '../../../atoms/icons';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';

const DropdownIndicator = (props: any) => {
  const { options } = props;
  return options.length > 0 ? <components.DropdownIndicator {...props} /> : null;
};

const IndicatorsContainerWrapper = styled(components.IndicatorsContainer)``;

export const IndicatorsContainer = (
  props: any,
) => {
  const { selectProps } = props;

  return (
    <IndicatorsContainerWrapper {...props}>
      {!selectProps.isDropdownDisabled && <DropdownIndicator {...props} />}
      <ButtonAtom
        borderRadius="0px 10px 10px 0px"
        buttonVariant="primary"
        onClick={() => {
          selectProps.onSubmit();
        }}
      >
        <IconWrapper icon={<SearchStandard />} />
      </ButtonAtom>
    </IndicatorsContainerWrapper>
  );
};

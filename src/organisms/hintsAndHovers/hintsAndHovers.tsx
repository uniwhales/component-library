import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { InfoStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { HintAndHoversWrapper, Tooltip } from './styles';
import { HintsAndHoversProps } from './types';

export const HintsAndHovers: FC<HintsAndHoversProps> = ({ id, place, hint }) => {
  const theme: any = useTheme();
  return (
    <HintAndHoversWrapper
      data-for={id}
      data-html
      data-tip={ReactDOMServer.renderToString(hint)}
    >
      <IconWrapper icon={<InfoStandard />} />
      <Tooltip
        backgroundColor={theme.containerAndCardShades.BG_SHADE_PLUS_4}
        textColor={theme.textShades.SHADE_MINUS_3}
        id={id}
        place={place}
        effect="solid"
        html
      />
    </HintAndHoversWrapper>
  );
};

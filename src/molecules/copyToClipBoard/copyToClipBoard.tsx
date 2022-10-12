import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CopyStandard } from '../../atoms/icons';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';

enum TEXT {
  COPY = 'Copy to clipboard',
  COPIED = 'Copied',
}
export interface CopyToClipBoardProps {
  text:string;
  walletCut?: boolean;
  id: string;
  color?:string;
  shortText?: string;
  icon: JSX.Element
}
const CustomReactTooltip = Styled(ReactTooltip)<{ id: string | number }>`
  width: 120px;
  text-align: center;
`;
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CopyToClipBoard = ({
  text = '0xF592602a9454162760A68E77ceA826e4386Cc', walletCut, id, color, shortText, icon,
}:CopyToClipBoardProps) => {
  const [copy, setCopy] = useState<boolean>(false);

  const copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(text)
      .then(() => {
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      });
  };

  return (
    <Wrapper>
      <Text color={color} size="S-Regular">{walletCut ? shortenAddressTo11Chars(text) : shortText ?? text }</Text>
      <div data-for={id} data-tip="Copy to clipboard">
        <CustomReactTooltip id={id} effect="solid" getContent={() => (copy ? TEXT.COPIED : TEXT.COPY)} />
        <IconWrapper cursor="pointer" width="17px" height="17px" fill={color} onClick={copyText} icon={icon ?? <CopyStandard />} />
      </div>
    </Wrapper>
  );
};

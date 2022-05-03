import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';

enum TEXT {
  COPY = 'Copy to clipboard',
  COPIED = 'Copied',
}
export interface CopyToClipBoardProps {
  text:string;
}
const CustomReactTooltip = Styled(ReactTooltip)`
  width: 120px;
  text-align: center;
`;
const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CopyToClipBoard = ({ text = '0xF592602a944162760A68E7cb767ceA826e4386Cc' }:CopyToClipBoardProps) => {
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
      <Text size="M-Regular">{text}</Text>
      <div data-tip="Copy to clipboard">
        <CustomReactTooltip effect="solid" getContent={() => (copy ? TEXT.COPIED : TEXT.COPY)} />
        <IconWrapper onClick={copyText} icon="copy" />
      </div>
    </Wrapper>
  );
};

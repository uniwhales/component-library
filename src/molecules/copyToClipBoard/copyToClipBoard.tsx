import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CopyStandard, LinkIcon } from '../../atoms/icons';
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
  icon?: JSX.Element;
  linkIcon?:JSX.Element;
  link?: string;
  hoverColor?: string;
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
  linkIcon, link, hoverColor,
}:CopyToClipBoardProps) => {
  const [copy, setCopy] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentLinkColor, setCurrentLinkColor] = useState(color);

  const copyText = () => {
    setCopy(true);
    navigator.clipboard.writeText(text)
      .then(() => {
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      });
  };
  const openLink = () => {
    link && window.open(link, '_blank');
  };
  return (
    <Wrapper>
      <Text color={color} size="S-Regular">{walletCut ? shortenAddressTo11Chars(text) : shortText ?? text }</Text>
      <div data-for={id} data-tip="Copy to clipboard">
        <CustomReactTooltip id={id} effect="solid" getContent={() => (copy ? TEXT.COPIED : TEXT.COPY)} />
        <IconWrapper
          onMouseEnter={() => {
            if (hoverColor) setCurrentColor(hoverColor);
          }}
          onMouseLeave={() => {
            if (hoverColor) setCurrentColor(color);
          }}
          cursor="pointer"
          width="17px"
          height="17px"
          fill={currentColor}
          onClick={copyText}
          icon={icon ?? <CopyStandard />}
        />
      </div>
      {link && (
      <IconWrapper
        onMouseEnter={() => {
          if (hoverColor) setCurrentLinkColor(hoverColor);
        }}
        onMouseLeave={() => {
          if (hoverColor) setCurrentLinkColor(color);
        }}
        cursor="pointer"
        width="17px"
        height="17px"
        fill={currentLinkColor}
        onClick={openLink}
        icon={linkIcon ?? <LinkIcon />}
      />
      )}
    </Wrapper>
  );
};

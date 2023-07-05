import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../../atoms/texts/text';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CopyStandard, LinkIcon } from '../../atoms/icons';
import { shortenAddressTo11Chars, shortenAddressWithTwoParts } from '../../utils/shortenAddress';
import { BodySizes, HeaderSizes } from '../../atoms/texts/types';
import { SimpleTooltip } from '../tooltip/TooltipComponent';
import { InnerContainer } from '../../organisms/dropdownSlider/styles';

enum TEXT {
  COPY = 'Copy to clipboard',
  COPIED = 'Copied',
}
export interface CopyToClipBoardProps {
  text: string;
  walletCut?: boolean;
  addressId?:string;
  color?: string;
  shortText?: string;
  icon?: JSX.Element;
  linkIcon?: JSX.Element;
  background?: boolean
  link?: string;
  hoverColor?: string;
  iconLeft?: boolean;
  textSize?: BodySizes | HeaderSizes
  iconSize?: string;
  copyCb?: (text: string) => void; // callback to be called when copy is clicked
}

const Wrapper = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  gap: 5px;
`;
const Background = styled.div<Pick<CopyToClipBoardProps, 'background' | 'hoverColor'>>`
  border-radius: 36px;
  background-color: ${({ theme, background }) => background && theme.containerAndCardShades.NEUTRAL_SHADE_0};
  padding: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${({ background, hoverColor }) => background && hoverColor && hoverColor};
  }
`;
const CopyTextLabel = styled.div`
  white-space: nowrap;
`;
export const CopyToClipBoard = ({
  text = '0xF592602a9454162760A68E77ceA826e4386Cc', walletCut, color, shortText, icon,
  linkIcon, link, textSize, iconSize, copyCb,
  /*
    When hoverColor is provided without background only the icon highlights
    When hoverColor is provided with background only the background highlights
  */
  hoverColor, background, iconLeft, addressId,
}: CopyToClipBoardProps) => {
  const [copy, setCopy] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentLinkColor, setCurrentLinkColor] = useState(color);

  const copyText = () => {
    setCopy(true);
    if (copyCb) copyCb(text);
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

  const copyIcon = (
    <IconWrapper
      onMouseEnter={() => {
        if (hoverColor && !background) setCurrentColor(hoverColor);
      }}
      onMouseLeave={() => {
        if (hoverColor && !background) setCurrentColor(color);
      }}
      cursor="pointer"
      width={iconSize ?? '12px'}
      height={iconSize ?? '12px'}
      fill={currentColor}
      onClick={copyText}
      icon={icon ?? <CopyStandard />}
    />
  );

  const TextLabel = (
    <CopyTextLabel>
      <Text color={color} size={textSize ?? '14-Regular'}>{addressId ? shortenAddressWithTwoParts(text, addressId) : walletCut ? shortenAddressTo11Chars(text) : shortText ?? text}</Text>
    </CopyTextLabel>
  );

  return (
    <Wrapper>
      {!iconLeft && TextLabel}
      <SimpleTooltip position="top" allowPointerEvents label={(copy ? TEXT.COPIED : TEXT.COPY)}>
        <InnerContainer>
          {copyIcon}
        </InnerContainer>
      </SimpleTooltip>
      {iconLeft && TextLabel}
      {link && (
        <Background hoverColor={hoverColor} background={background}>
          <IconWrapper
            onMouseEnter={() => {
              if (hoverColor && !background) setCurrentLinkColor(hoverColor);
            }}
            onMouseLeave={() => {
              if (hoverColor && !background) setCurrentLinkColor(color);
            }}
            cursor="pointer"
            width={iconSize ?? '12px'}
            height={iconSize ?? '12px'}
            fill={currentLinkColor}
            onClick={openLink}
            icon={linkIcon ?? <LinkIcon />}
          />
        </Background>
      )}
    </Wrapper>
  );
};

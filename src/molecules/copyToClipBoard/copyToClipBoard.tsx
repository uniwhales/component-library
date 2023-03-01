import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CopyStandard, LinkIcon } from '../../atoms/icons';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';
import { BodySizes, HeaderSizes } from '../../atoms/texts/types';

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
  background?: boolean
  link?: string;
  hoverColor?: string;
  iconLeft?: boolean;
  textSize?: BodySizes | HeaderSizes
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
const Background = Styled.div<Pick<CopyToClipBoardProps, 'background' | 'hoverColor'>>`
  border-radius: 36px;
  background-color: ${({ theme, background }) => background && theme.containerAndCardShades.NEUTRAL_SHADE_0};
  padding: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${({ background, hoverColor }) => background && hoverColor && hoverColor};
  }
`;
export const CopyToClipBoard = ({
  text = '0xF592602a9454162760A68E77ceA826e4386Cc', walletCut, id, color, shortText, icon,
  linkIcon, link, textSize,
  /*
    When hoverColor is provided without background only the icon highlights
    When hoverColor is provided with background only the background highlights
  */
  hoverColor, background, iconLeft,
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

  const copyIcon = (
    <IconWrapper
      onMouseEnter={() => {
        if (hoverColor && !background) setCurrentColor(hoverColor);
      }}
      onMouseLeave={() => {
        if (hoverColor && !background) setCurrentColor(color);
      }}
      cursor="pointer"
      width="12px"
      height="12px"
      fill={currentColor}
      onClick={copyText}
      icon={icon ?? <CopyStandard />}
    />
  );

  const text = <Text color={color} size={textSize ?? 'S-Regular'}>{walletCut ? shortenAddressTo11Chars(text) : shortText ?? text }</Text>;

  return (
    <Wrapper>
      {!iconLeft && text}
      <Background hoverColor={hoverColor} background={background} data-for={id} data-tip="Copy to clipboard">
        <CustomReactTooltip delayShow={0} delayHide={0} scrollHide id={id} effect="solid" getContent={() => (copy ? TEXT.COPIED : TEXT.COPY)} />
        {copyIcon}
      </Background>
      {iconLeft && text}
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
            width="12px"
            height="12px"
            fill={currentLinkColor}
            onClick={openLink}
            icon={linkIcon ?? <LinkIcon />}
          />
        </Background>
      )}
    </Wrapper>
  );
};

import React, { useRef, useState } from 'react';
import { Text } from '../../atoms/texts/text';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CopyStandard, LinkIcon } from '../../atoms/icons';
import { shortenAddressTo11Chars, shortenAddressWithTwoParts } from '../../utils/shortenAddress';
import { BodySizes, HeaderSizes } from '../../atoms/texts/types';
import { SimpleTooltip } from '../tooltip/TooltipComponent';
import { InnerContainer } from '../../organisms/dropdownSlider/styles';
import { useClickOutside } from '../../utils/useClickOutside';

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
  isMobile?: boolean;
  copyCb?: (text: string) => void; // callback to be called when copy is clicked
  allowTextClick?: boolean;
}

const Wrapper = Styled.div`
  display: flex;
  width: auto;
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
const CopyTextLabel = Styled.div<{ allowTextClick?: boolean }>`
  white-space: nowrap;
  cursor: ${({ allowTextClick }) => (allowTextClick ? 'pointer' : 'default')};
`;
export const CopyToClipBoard = ({
  text = '0xF592602a9454162760A68E77ceA826e4386Cc', walletCut, color, shortText, icon,
  linkIcon, link, textSize, iconSize, copyCb, allowTextClick = false,
  /*
    When hoverColor is provided without background only the icon highlights
    When hoverColor is provided with background only the background highlights
  */
  hoverColor, background, iconLeft, addressId, isMobile = false,
}: CopyToClipBoardProps) => {
  const [copy, setCopy] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentLinkColor, setCurrentLinkColor] = useState(color);
  const [mobileTooltipOpen, setMobileTooltipOpen] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setMobileTooltipOpen(false));

  const copyText = () => {
    setCopy(true);
    if (copyCb) copyCb(text);
    navigator.clipboard.writeText(text)
      .then(() => {
        setTimeout(() => {
          setCopy(false);
          setMobileTooltipOpen(false);
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
    <CopyTextLabel
      onMouseEnter={() => {
        if (allowTextClick && hoverColor) setCurrentColor(hoverColor);
      }}
      onMouseLeave={() => {
        if (allowTextClick && hoverColor) setCurrentColor(color);
      }}
      allowTextClick={allowTextClick}
    >
      <Text color={allowTextClick ? currentColor : color} size={textSize ?? '14-Regular'}>{addressId ? shortenAddressWithTwoParts(text, addressId) : walletCut ? shortenAddressTo11Chars(text) : shortText ?? text}</Text>
    </CopyTextLabel>
  );

  const MobileTooltip = (
    <SimpleTooltip position="top" allowPointerEvents label={TEXT.COPIED} opened={mobileTooltipOpen}>
      <InnerContainer>
        {copyIcon}
      </InnerContainer>
    </SimpleTooltip>
  );

  const DesktopTooltip = (
    <SimpleTooltip position="top" allowPointerEvents label={(copy ? TEXT.COPIED : TEXT.COPY)}>
      <InnerContainer>
        {copyIcon}
      </InnerContainer>
    </SimpleTooltip>
  );

  const TextAndIconTooltip = (
    <SimpleTooltip position="top" allowPointerEvents label={(copy ? TEXT.COPIED : TEXT.COPY)}>
      <InnerContainer>
        {TextLabel}
        {copyIcon}
      </InnerContainer>
    </SimpleTooltip>
  );

  if (allowTextClick) {
    return (
      <Wrapper ref={clickRef} onClick={() => setMobileTooltipOpen(true)}>
        {TextAndIconTooltip}
      </Wrapper>
    );
  }

  return (
    <Wrapper ref={clickRef} onClick={() => setMobileTooltipOpen(true)}>
      {!iconLeft && TextLabel}
      {isMobile ? MobileTooltip : DesktopTooltip}
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

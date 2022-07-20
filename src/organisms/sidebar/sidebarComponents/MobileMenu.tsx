import React from 'react';
import { Styled } from '../../../theme';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import {
  CrossIcon, NewsStandard, Fire, ChartStandard, Menu,
} from '../../../atoms/icons';

const Wrapper = Styled.div`
  z-index: 10000000000;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 72px;
  border-radius: 12px;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
`;
const Section = Styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
  setExpanded:React.Dispatch<React.SetStateAction<boolean>>
}
export const MobileMenu = ({ isMobileMenuOpen, setMobileMenu, setExpanded }:MobileMenuProps) => (
  <Wrapper>
    <Section>
      <IconWrapper
        onClick={() => {
          setMobileMenu(!isMobileMenuOpen);
          setExpanded(true);
        }}
        width="24px"
        height="24px"
        cursor="pointer"
        icon={isMobileMenuOpen ? <CrossIcon /> : <Menu />}
      />
    </Section>
    <Section>
      <IconWrapper
        cursor="pointer"
        width="24px"
        height="24px"
        icon={<NewsStandard />}
      />
    </Section>
    <Section>
      <IconWrapper
        cursor="pointer"
        width="24px"
        height="24px"
        icon={<Fire />}
      />
    </Section>
    <Section>
      <IconWrapper
        cursor="pointer"
        width="24px"
        height="24px"
        icon={<ChartStandard />}
      />
    </Section>
  </Wrapper>
);

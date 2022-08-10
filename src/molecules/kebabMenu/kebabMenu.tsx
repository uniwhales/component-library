import React, { useRef } from 'react';
import { Kebab } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  KebabContainer, KebabRow, Container, KebabWrapper,
} from './kebabMenu.styles';
import { Item, KebabMenuProps } from './types';

export const KebabMenu = ({
  items,
  showMenu,
  setShowMenu,
  width,
}: KebabMenuProps) => {
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setShowMenu(false));
  return (
    <Container ref={clickRef}>
      <KebabWrapper>
        <IconWrapper
          onClick={() => setShowMenu(!showMenu)}
          cursor="pointer"
          icon={<Kebab />}
        />
      </KebabWrapper>
      {showMenu && (
        <KebabContainer width={width} onMouseLeave={() => setShowMenu(false)}>
          {items.map((item: Item) => (
            <KebabRow key={item.key}>
              {item.content}
            </KebabRow>
          ))}
        </KebabContainer>
      )}
    </Container>
  );
};

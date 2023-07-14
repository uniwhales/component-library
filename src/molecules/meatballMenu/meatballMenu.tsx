import React, { useRef } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Meatball } from '../../atoms/icons';
import { useClickOutside } from '../../utils/useClickOutside';
import {
  Container, MeatballContainer, MeatballRow,
} from './meatballMenu.styles';
import { MeatballMenuProps, Item } from './types';

export const MeatballMenu = ({
  items,
  showMenu,
  setShowMenu,
  width,
  disabled,
}: MeatballMenuProps) => {
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setShowMenu(false));
  return (
    <Container ref={clickRef}>
      <ButtonAtom
        buttonVariant="special_tiny_round"
        onClick={() => setShowMenu(!showMenu)}
        disabled={disabled}
      >
        <Meatball />
      </ButtonAtom>
      {showMenu && (
      <MeatballContainer width={width} onMouseLeave={() => setShowMenu(false)}>
        {items.map((item: Item) => (
          <MeatballRow key={item.key}>
            {item.content}
          </MeatballRow>
        ))}
      </MeatballContainer>
      )}
    </Container>
  );
};

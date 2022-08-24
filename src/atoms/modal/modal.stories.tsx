import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { ButtonAtom } from '../buttons/button';
import { ExampleModal } from './modalModel';
import { ModalMockDataLatestAnnouncements } from './mockData';
import { BrochureLayout } from '../../layouts/brochure/brochureLayout.styles';
import { Navbar } from '../../organisms/navbar/navbar';
import { Styled } from '../../theme';

const list = Array.from(Array(20).keys());

export default {
  title: 'Atoms/Modal',
} as ComponentMeta<typeof ExampleModal>;

const Placeholder = Styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Proxy = () => {
  const Example = useModal(ExampleModal);

  return (
    <>
      <Navbar onBackButtonClick={() => {}} onWalletConnectClick={() => {}} pageName="Example" account={undefined} plan="Free" />
      <BrochureLayout>
        <ButtonAtom
          buttonVariant="primary"
          onClick={() => Example.show({
            latest: ModalMockDataLatestAnnouncements,
            closeFn: () => Example.remove(),
          })}
        >
          Open Modal
        </ButtonAtom>
        {list.map(() => <Placeholder />)}
      </BrochureLayout>
    </>
  );
};

const Template: ComponentStory<typeof ExampleModal> = () => (
  <NiceModal.Provider>
    <Proxy />
  </NiceModal.Provider>
);

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

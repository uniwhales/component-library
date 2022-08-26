import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { ButtonAtom } from '../buttons/button';
import { ExampleModal, NoIconModal } from './modalModel';
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
const NoIcon = () => {
  const WithoutIcon = useModal(NoIconModal);

  return (
    <>
      <Navbar onBackButtonClick={() => {}} onWalletConnectClick={() => {}} pageName="Example" account={undefined} plan="Free" />
      <BrochureLayout>
        <ButtonAtom
          buttonVariant="primary"
          onClick={() => WithoutIcon.show({
            placeholderText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            closeFn: () => WithoutIcon.remove(),
          })}
        >
          Open Modal
        </ButtonAtom>
      </BrochureLayout>
    </>
  );
};

const Template: ComponentStory<typeof ExampleModal> = () => (
  <NiceModal.Provider>
    <Proxy />
  </NiceModal.Provider>
);
const Template2: ComponentStory<typeof ExampleModal> = () => (
  <NiceModal.Provider>
    <NoIcon />
  </NiceModal.Provider>
);

export const Primary = Template.bind({});
export const ModalWithoutIcon = Template2.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

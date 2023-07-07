import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { styled } from 'styled-components';
import { ButtonAtom } from '../buttons/button';
import { DoubleModalExample, ExampleModal } from './modalModel';
import { ModalMockDataLatestAnnouncements } from './mockData';
import { BrochureLayout } from '../../layouts/brochure/brochureLayout.styles';
import { Navbar } from '../../organisms/navbar/navbar';

const list = Array.from(Array(20).keys());

const meta: Meta<typeof ExampleModal> = {
  component: ExampleModal,
};

export default meta;
type Story = StoryObj<typeof ExampleModal>;

const Placeholder = styled.div`
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
      <Navbar onWalletConnectClick={() => {}} pageName="Example" account={undefined} plan="Free" />
      <BrochureLayout>
        <ButtonAtom
          $buttonVariant="primary"
          onClick={() => Example.show({
            latest: ModalMockDataLatestAnnouncements,
            $closeFn: () => Example.remove(),
          })}
        >
          Open Modal
        </ButtonAtom>
        {list.map(() => <Placeholder />)}
      </BrochureLayout>
    </>
  );
};

const Double = () => {
  const DoubleModal = useModal(DoubleModalExample);

  return (
    <>
      <Navbar onWalletConnectClick={() => {}} pageName="Example" account={undefined} plan="Free" />
      <BrochureLayout>
        <ButtonAtom
          $buttonVariant="primary"
          onClick={() => DoubleModal.show({
            placeholderText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            $closeFn: () => DoubleModal.remove(),
          })}
        >
          Open Modal
        </ButtonAtom>
      </BrochureLayout>
    </>
  );
};

const Template = () => (
  <NiceModal.Provider>
    <Proxy />
  </NiceModal.Provider>
);

const Template2 = () => (
  <NiceModal.Provider>
    <Double />
  </NiceModal.Provider>
);

export const Primary: Story = {
  render: () => <Template />,
};
export const DoubleModal: Story = {
  render: () => <Template2 />,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { ButtonAtom } from '../buttons/button';
import { ExampleModal } from './modalModel';
import { ModalMockDataLatestAnnouncements } from './mockData';

export default {
  title: 'Atoms/Modal',
} as ComponentMeta<any>;

const Proxy = () => {
  const Example = useModal(ExampleModal);

  return (
    <ButtonAtom buttonVariant="primary" onClick={() => Example.show({ latest: ModalMockDataLatestAnnouncements })}>
      Open Modal
    </ButtonAtom>
  );
};

const Template: ComponentStory<any> = () => (
  <NiceModal.Provider>
    <Proxy />
  </NiceModal.Provider>
);

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

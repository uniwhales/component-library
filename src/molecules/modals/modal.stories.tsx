import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './modal';

export default {
  title: 'Molecules/Modals',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(!showModal)}>hello</button>
      <Modal show={showModal} toggle={() => setShowModal(!showModal)} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  show: true,
};
Primary.parameters = {
  backgrounds: { default: 'dark' },
};

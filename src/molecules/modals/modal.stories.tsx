import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Text } from '../../atoms/texts/text';
import { Modal } from './modal';
import { DummyModalContent } from './modal.styles';

export default {
  title: 'Molecules/Modals',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(!showModal)}>{showModal ? 'Close Modal' : 'Open Modal '}</button>
      <Modal
        show={showModal}
        toggle={() => setShowModal(!showModal)}
      >
        <DummyModalContent>
          <Text size="H3-Bold">Title</Text>
          <Text size="S-Regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque rem veritatis expedita, eaque modi sed adipisci.</Text>
        </DummyModalContent>
      </Modal>
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

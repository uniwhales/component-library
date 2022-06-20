import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
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
          <Text size="H1-Bold">Title</Text>
          <Text size="M-Regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero doloribus aliquam quaerat? Voluptate veritatis odio reprehenderit dolorum, modi minima labore quas nobis. Reprehenderit minima veritatis quae exercitationem, distinctio sunt.</Text>
          <ButtonAtom buttonVariant="primary" onClick={() => setShowModal(false)}>
            close
          </ButtonAtom>
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

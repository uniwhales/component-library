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
      <button type="button" onClick={() => setShowModal(!showModal)}>{showModal ? 'Close' : 'Open'}</button>
      <Modal
        show={showModal}
        toggle={() => setShowModal(!showModal)}
        header={(
          <>
            Powered by
            {' '}
            <strong>Drip</strong>
          </>
        )}
        title="Approve Token"
        subtitle="Sign transaction in your wallet to approve token spend"
        content="You have not done this before. This is only a one time transaction per token."
        link={{ text: 'Link Text', href: 'https://something.com' }}
      />
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

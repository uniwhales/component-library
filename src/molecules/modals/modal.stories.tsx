import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import {
  ArrowLeftIcon, ArrowRightIcon, ProfileStandard, StarIcon,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Input } from '../../atoms/inputs/input';
import { ExtraContentRow, ModalColumn, ModalContentContainer } from '../../atoms/modal/styles';
import { Text } from '../../atoms/texts/text';
import { Modal } from './modal';
import { DummyModalContent } from './modal.styles';

export default {
  title: 'Molecules/Modals',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const placeholderText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Template: ComponentStory<typeof Modal> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(!showModal)}>{showModal ? 'Close Modal' : 'Open Modal '}</button>
      <Modal
        show={showModal}
        toggle={() => setShowModal(!showModal)}
        headerText="Header"
        headerIcon={<StarIcon />}
        modalVariant="single"
        modalContent={(
          <DummyModalContent>
            <Text size="14-Regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque rem veritatis expedita, eaque modi sed adipisci.</Text>
            <Input
              value="afadf"
              label="fdfsa"
              type="text"
              onChange={(e) => console.log(e)}
            />
          </DummyModalContent>
        )}
      />
    </>
  );
};

const Template2: ComponentStory<typeof Modal> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setShowModal(!showModal)}>{showModal ? 'Close Modal' : 'Open Modal '}</button>
      <Modal
        show={showModal}
        toggle={() => setShowModal(!showModal)}
        headerText="Double Modal"
        headerIcon={<StarIcon />}
        modalVariant="double"
        additionalTinyAction={(
          <ButtonAtom buttonVariant="special_small">
            <>
              <IconWrapper height="16px" width="16px" icon={<ProfileStandard />} />
              View Profile
            </>
          </ButtonAtom>
        )}
        modalContent={(
          <ModalContentContainer>
            <ModalColumn>
              <Text size="14-Regular">{placeholderText}</Text>
              <ExtraContentRow onClick={() => setShowMore(!showMore)}>
                <Text size="12-Regular">{`${!showMore ? 'show' : 'hide'} extra content`}</Text>
                <IconWrapper
                  height="12px"
                  width="12px"
                  icon={!showMore ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                />
              </ExtraContentRow>
            </ModalColumn>
            {showMore && (
              <ModalColumn>
                {' '}
                <Text size="14-Regular">{placeholderText}</Text>
              </ModalColumn>
            )}
          </ModalContentContainer>
        )}
      />
    </>
  );
};

export const Primary = Template.bind({});
export const DoubleModal = Template2.bind({});

Primary.args = {
  show: true,
};
Primary.parameters = {
  backgrounds: { default: 'dark' },
};

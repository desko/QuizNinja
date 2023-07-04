import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody, Text,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import Btn from '../Btn/Btn';

const ConfirmationModal = ({submitHandler}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Btn text='Submit' clickHandler={onOpen} />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border={'.3rem solid'}
          borderColor='orange.400'
          borderRadius='2rem'
          p='6rem 3rem 1rem 3rem'
          display='flex'
          m='auto'
          width='calc(100% - 4rem)' maxWidth={{'sm': '100%',
            'md': '100%',
            'lg': '60rem',
          }} paddingX='2rem'>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='500' mb='1rem'>
                Are you sure you want to submit? Once submitted, you will not be able to make any changes.
            </Text>
          </ModalBody>
          <ModalFooter gap='2rem'>
            <Btn text='Yes' clickHandler={submitHandler}/>
            <Btn text='No' clickHandler={onClose}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmationModal;

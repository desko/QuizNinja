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

      <Modal
        variant='custom'
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='500' mb='1rem'>
                Are you sure you want to submit? Once submitted, you will not be able to make any changes.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Btn text='Yes' clickHandler={submitHandler}/>
            <Btn text='No' clickHandler={onClose}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmationModal;

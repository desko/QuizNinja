import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const AccordionSingle = ({title, items, RenderItem}) => {
  return (
    <Accordion allowMultiple py='2rem'>
      <AccordionItem>
        <h2>
          <AccordionButton
            fontSize='3xl'
            fontWeight='bold'
            bgColor='orange.400'
            color='white'
            p='1rem 2rem'
            borderRadius='1rem'
            _hover={{
              bgColor: 'orange.600',
              color: 'white',
            }}
            _expanded={{
              borderRadius: '1rem 1rem 0 0',
            }}>
            <Box as="span" flex='1' textAlign='left'>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          maxH='max(40vh, 40rem)'
          overflow='auto'
          p='2rem'
          bgColor='orange.50'
          borderRadius='0 0 1rem 1rem'>
          <Grid templateColumns='1fr' gap='1rem'>
            {
              items?.map((item) => {
                return (
                  <GridItem key={item.question} >
                    <RenderItem question={item} />
                  </GridItem>
                );
              })
            }
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSingle;

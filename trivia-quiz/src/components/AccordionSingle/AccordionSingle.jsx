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
    <Accordion
      variant='custom'
      allowMultiple
      py='2rem'
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
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

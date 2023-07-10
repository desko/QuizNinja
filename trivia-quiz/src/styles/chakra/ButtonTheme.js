
const variants = {
  custom: {
    alignSelf: 'center',
    fontSize: '1.6rem',
    p: '1rem 2.5rem',
    textTransform: 'capitalize',
    borderRadius: '1rem',
    lineHeight: '1',
    height: 'auto',
    bgColor: 'orange.400',
    color: 'white',
    colorScheme: 'orange',
    transition: 'background-color .4s, color .4s',
    _hover: {
      bgColor: 'orange.600',
      _disabled: {
        bgColor: 'orange.600',
      },
    },
  },
};

export const buttonTheme = {
  variants,
};

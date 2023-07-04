import {Box} from '@chakra-ui/react';

const Award = ({color}) => {
  return (
    <Box
      maxW='20rem'
      w='100%'
      mx='auto'
      py='2rem'
      color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 15"
        width={20}
        height={15}
        style={{
          width: '100%',
          height: 'auto',
          color: 'inherit',
        }}
      >
        <path
          // eslint-disable-next-line max-len
          d="M1 2.48s2.88-1.31 9.09-1.33S19 2.58 19 2.58l-1.66 1.94-1.24-1.26s-1.43-.83-6.58-.67-6.15.54-6.15.54L1.42 4.24Z"
          fill="currentColor"
          stroke="#1d1d1d"
          strokeMiterlimit={10}
          strokeWidth={'.02rem'}
        />
        <path
          d="m8.72 6.56.03-2.09.52-.22 1.59-.03.18-.14.31.07.67 1.29-1.8 2.23-1.5-1.11zm0-.03 2.32-2.45"
          fill="currentColor"
          stroke="#1d1d1d"
          strokeMiterlimit={10}
          strokeWidth={'.02rem'}
        />
        <path
          // eslint-disable-next-line max-len
          d="M11.61 4.63s7-2.31 7.39-2.11.61 1.61.36 1.87a63.29 63.29 0 0 1-8.18 2.18L12 5.46Zm-2.89.17S1.65 2.35 1 2.52.64 4.69.79 4.77s8 1.76 8 1.76Zm.43 2.08S7 12.3 7.2 14c.6.47 1.75.06 1.75.06l1-6.58Z"
          fill="currentColor"
          stroke="#1d1d1d"
          strokeMiterlimit={10}
          strokeWidth={'.02rem'}
        />
        <path
          d="m10.54 7.25 4 5.83s1.24-.41 1.1-1.05c-.21-.95-4.37-5.59-4.37-5.59Z"
          fill="currentColor"
          stroke="#1d1d1d"
          strokeMiterlimit={10}
          strokeWidth={'.02rem'}
        />
      </svg>
    </Box>
  );
};

export default Award;

import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               // 'backgroundImage': 'url(/football.webp)',
               // 'backgroundSize': 'cover',
               // 'backgroundPosition': 'center',
               // 'backgroundRepeat': 'no-repeat',
               // 'filter': 'brightness(0.7)',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '1000px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Welcome to{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     [Your IPTV Service Name]- {' '}
                  </Text>
                     <Text
                        h1
                        css={{
                           display: 'inline',
                        }}
                     >
                        Your Ultimate Gateway to Entertainment!
                     </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '700px',
                  }}
                  size={'$lg'}
                  span
               >
                  over 90,000 channels, an extensive movie & series library, and seamless streaming in (4k, 8k,FHD, HD & SD)– it’s everything you’ve been waiting for.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
                  wrap={'wrap'}
               >
                  {/* <Input placeholder="Enter your email address" size="lg" /> */}
                  <Button>Get Started</Button>
               </Flex>
               {/* <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               > */}
                  {/* <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> No credit card required.
                  </Flex> */}
                  {/* <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> 14-day free trial.
                  </Flex> */}
                  {/* <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Cancel anytime.
                  </Flex> */}
               {/* </Flex> */}
            </Box>
            {/* <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="mock.png" />
            </Box> */}
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};

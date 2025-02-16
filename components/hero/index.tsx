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
               'height': '100vh',
               'backgroundImage': 'url(/Background_webp.webp)',
               'backgroundSize': 'cover',
               'backgroundPosition': 'center',
               'backgroundRepeat': 'no-repeat',
               'filter': 'brightness(0.9)',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$0',
               },
            }}
            // css={{
            //    position: 'relative',
            //    gap: '$3',
            //    px: '$6',
            //    flexDirection: 'column',
            //    alignContent: 'center',
            //    justifyContent: 'center',
            //    alignItems: 'center',
            //    width: '100%',
            //    overflow: 'hidden',
            //    '@sm': {
            //       flexDirection: 'row',
            //       mt: '$20',
            //    },
            //    '&::before': {
            //       content: '""',
            //       position: 'absolute',
            //       top: 0,
            //       left: 0,
            //       width: '100%',
            //       height: '100%',
            //       backgroundImage: 'url(/football.webp)',
            //       backgroundSize: 'cover',
            //       backgroundPosition: 'center',
            //       backgroundRepeat: 'no-repeat',
            //       filter: 'brightness(0.5)',
            //       zIndex: -1,
            //    },
            // }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                     color: '$accents8'
                     // maxWidth: '700px',
                  }}
                  size={'$lg'}
                  span
               >
                  over 90,000 channels, an extensive movie & series library, and seamless streaming in (4k, 8k,FHD, HD & SD)– it’s everything you’ve been waiting for.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$20',
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

import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span
                  css={{
                     margin: '2rem',
                     color: '$blue600',
                     fontSize: '28px',
                     fontWeight: '700'
                     }}>
                  How to get started ?
               </Text>
               <Text h3>
                  1. Choose a Subscription Plan</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Pick the plan that works best for you – we have options to fit every budget.

               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     {/* <BoxIcon /> */}
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           2. Follow Our Simple Setup Guide
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Activate your service with ease using our step-by-step instructions.
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     {/* <BoxIcon /> */}
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           3. Enjoy Unlimited Entertainment
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Sit back and stream your favorite shows, movies, sports, and much more.
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex 
               align={'center'}
               direction={'column'}
               >
               <FeatureIcon />
               <Text
                  // css={{
                  //    margin: '1rem'
                  // }}
               >Start Your Journey Now – Claim Your 50% Off</Text>
               <Button
                  css={{
                     margin: '1rem'
                  }}
               >Get Started</Button>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

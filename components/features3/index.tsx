import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600', fontSize: '28px', fontWeight: '700'}}>
                  What we offer
               </Text>
               {/* <Text h3>Your title here</Text> */}
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Over 90,000 Channels.
                  Access a massive selection of live TV channels, including sports,
                  news, movies, kids’ programming, and entertainment from all over the world.
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Vast Movie & Series Library</Text>
                           <Text span>
                              Enjoy thousands of on-demand movies and TV series in every genre imaginable,
                              constantly updated to keep you entertained.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Multi-Quality Streaming</Text>
                           <Text span>
                              Whether you’re watching in 4K, Full HD, HD, or SD,
                              our service provides crystal-clear options for
                              every device and internet speed.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Content for All Ages</Text>
                           <Text span>
                              From kids’ shows to family-friendly programming, drama, action,
                              and more – we’ve got something for everyone.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Premium Servers with No Buffering</Text>
                           <Text span>
                              Enjoy uninterrupted streaming with our high-performance servers,
                              ensuring a smooth experience even during peak hours.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

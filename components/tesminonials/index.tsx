import {Button, Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {QuotesIcon} from '../icons/QuotesIcon';
import {Flex} from '../styles/flex';

import MyGallery from '../MyGallery/index'

export const Testimonials = () => {
   return (
      <>
         <Flex
            className="testimonials"
            direction={'column'}
            css={{
               'gap': '1rem',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               'py': '$20',
               'flexDirection': 'column-reverse',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row-reverse',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{gap: '1.5rem'}}>
               <MyGallery />
               {/* <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card> */}
            </Flex>
            <Flex
               align={'start'}
               direction={'column'}
               css={{
                  'alignItems': 'center',
                  '@sm': {
                     alignItems: 'start',
                  },
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  Don&apos;t take our world for it
               </Text>
               <Text h3>What our client say</Text>
               <Text span css={{color: '$accents8', maxW: '600px', pb: '$8'}}>
                  Our IPTV service has transformed the viewing experience for countless
                  customers. With access to over 90,000 channels, an extensive library of
                  movies and series, and seamless streaming in 4K, 8K, FHD, HD, and SD,
                  our clients are thrilled with the quality and variety we offer. Here are
                  some of the success stories from our valued customers who have enjoyed
                  uninterrupted entertainment and exceptional service. Their feedback
                  highlights the dedication and expertise we bring to every subscription.
               </Text>
               <Button>Read case studies</Button>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

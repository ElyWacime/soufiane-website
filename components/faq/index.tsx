import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>Frequently Asked Questions</Text>
               {/* <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                  aliquet
               </Text> */}
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How do i subscribe and use your IPTV service ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        To subscribe you need to choose one of our IPTV plans according to your needs,
                        after purchasing you will receive the necessary information to activate your IPTV.
                        Or you can request a free trial, after a few minutes you get the login information,
                        if you like the service, you subscribe and keep the same login information.
                        In both cases, our support will accompany you until the server is running on your device successfully
                     </Text>
                     {/* <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text> */}
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What devices do you support ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We support all kind of devices. except Roku tv
                        aliquet
                     </Text>
                     {/* <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, aliquet
                     </Text> */}
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What is the best Server IPTV ?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        best server IPTV is Strong, more stable than other server, and&apos;t buffer or freeze.
                        How does it go after paying my iptv subscription?
                        One of our agent will contact you by email or WhatsApp within a maximum of 15 minutes after your payment.
                        Our support will accompany you step by step until you run the server on your device
                     </Text>
                     {/* <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text> */}
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How Many Channel do I Get? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        you will get more than 100,000+ VODS including TV Series & Movies.
                     </Text>
                     {/* <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text> */}
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What Payment method accept ? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Payment method : Stripe and Paypal as friend and family.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Do I need satellite for using IPTV? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        No, you will connect our servers via Internet and you don&apos;t need satellite equipments.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How it Works? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        1- Select Subscription or package: 12 months, 6 months …
                        2- Pay via Paypal or credit card
                        3- After Payment your IPTV Logins & Config details will be instantly & Automatically generated
                        4-Our team will contact you to direct you and provide you with the necessary information
                        to run the server on your device
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What Internet Quality Should I Have? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        At last 16 mbps. The Internet must be a good and stable line. The more stable and good the internet line,
                        the clearer the quality of the images will be and there will be no obstacles during the showing of matches,
                        movies, or series.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} /*justify={'center'}*/>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What Kind Of Devices Do You Support? 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We support all kind of devices such as: MAG, Android Smart Phone, Android Boxes,
                        Enigma, DreamBox, Vu+ (…), PC, VLC, Kodi/XBMC (…), Smart TV.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

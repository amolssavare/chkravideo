import React from 'react';


import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/mediaplayers.jpg';
import img2 from '../assets/2.png';
import img3 from '../assets/8.png';
import img4 from '../assets/4.png';
import img5 from '../assets/51.webp';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: '4',
    size: '4xl',

}
const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading
                textTransform={"uppercase"}
                py="2" w={"fit-content"}
                borderBottom={"2px solid"}
                m="auto">
                Services</Heading>
            <Stack
                h="full"
                p={"4"}
                alignItems={"center"}
                direction={['column', 'row']}>
                <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg'} />
                <Text letterspacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign="center">
                    The Brain-Music-video Connection
                    Experts are trying to understand how our brains can hear and play music. A stereo system puts out vibrations that travel through the air and somehow get inside the ear canal. These vibrations tickle the eardrum and are transmitted into an electrical signal that travels through the auditory nerve to the brain stem, where it is reassembled into something we perceive as music.
                </Text>

            </Stack>
        </Container>
    </Box>

};
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingOptions}>
                Free Videos
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                play video and be cool
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Night life cool
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                VideoHUB
            </Heading>
        </Box>
    </Carousel>
);

export default Home


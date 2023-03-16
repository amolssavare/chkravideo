import { Box, Stack, Heading, VStack, HStack, Button, Input,Text} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend,AiFillYoutube, AiFillInstagram, AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
    <Stack direction={['column', 'row']}>


      <VStack alignItems={"Stretch"} w={"full"} px={"4"}>
        <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>Subscribe and Get Update</Heading>
        <HStack
          borderBottom={"2px solid white"}
          py="2"

        >
          <Input
            placeholder="enter email here..."
            border={"none"}
            borderRadius="none"
            outline={"none"}
            focusBorderColor={"none"} />

          <Button
            p={"0"}
            colorScheme={"purple"}
            variant={"ghost"}
            borderRadius={"0 20px 20px 0"}


          >
            <AiOutlineSend size={20} />
          </Button>
        </HStack>
      </VStack>
      <VStack w={"full"}
        borderLeft={["none", "1px solid white"]}
        borderRight={["none", "1px solid white"]}>
        <Heading textTransform={"uppercase"} textAlign={"center"}>

          VideoHUBB
        </Heading>
        <Text>All Rights reserved</Text>

      </VStack>
      <VStack w={"full"}>
<Heading size={"md"} textTransform={"uppercase"}>
  Social Media
</Heading>
<Button variant={"link"} colorScheme={"purple"}>
< a target={"blank"} href="https://youtube.com">
<AiFillYoutube/>
</a>
</Button>
<Button variant={"link"} colorScheme={"purple"}>
< a target={"blank"} href="https://github.com">
<AiFillGithub/>
</a>
</Button>
<Button variant={"link"} colorScheme={"purple"}>
< a target={"blank"} href="https://instagram.com">
<AiFillInstagram/>
</a>
</Button>
      </VStack>
    </Stack>
  </Box>
}

export default Footer

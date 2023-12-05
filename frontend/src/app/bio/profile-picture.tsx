import { Image as ChakraImage, Box, StyleProps } from "@chakra-ui/react";

const ProfilePicture = ({
  src,
  alt,
  ...rest
}: {
  src: string;
  alt: string;
} & StyleProps) => {
  return (
    <Box pos="relative" {...rest}>
      <ChakraImage
        w={[200, 300]}
        minW={[200, 300]}
        h={[200, 300]}
        minH={[200, 300]}
        borderRadius={"xl"}
        src={src}
        alt={alt}
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        px={[2, 4]}
        py={[1, 3]}
        borderTopLeftRadius={"xl"}
        borderBottomRightRadius={"xl"}
        background={"black"}
      >
        <ChakraImage maxW={["40px", "50px"]} src="assets/kydlabs.png" />
      </Box>
    </Box>
  );
};

export default ProfilePicture;

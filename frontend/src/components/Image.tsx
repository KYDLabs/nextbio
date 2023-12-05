import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";

// https://www.dvartic.xyz/blog/chakra-a-image-components
export default function Image(props: ImageProps & BoxProps) {
  const {
    width,
    height,
    priority,
    sizes,
    src,
    fill,
    loader,
    quality,
    placeholder,
    style,
    onLoadingComplete,
    onLoad,
    onError,
    loading,
    blurDataURL,
    alt,
    ...restProps
  } = props;

  const imageProps = {
    width,
    height,
    priority,
    sizes,
    src,
    fill,
    loader,
    quality,
    placeholder,
    style,
    onLoadingComplete,
    onLoad,
    onError,
    loading,
    blurDataURL,
    alt,
  };

  return (
    <Box {...restProps} overflow={"hidden"}>
      <NextImage {...imageProps} />
    </Box>
  );
}

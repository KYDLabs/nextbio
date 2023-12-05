import { Box } from "@chakra-ui/react";
import Image from "next/image";

const SOCIAL_ICON_MAP = {
  instagram: { color: "rgb(233, 68, 117)", src: "assets/social/instagram.svg" },
  twitter: { color: "rgb(0, 172, 237)", src: "assets/social/twitter.svg" },
  youtube: { color: "rgb(255, 51, 51)", src: "assets/social/youtube.svg" },
  share: { color: "rgb(0, 191, 0)", src: "assets/social/share.svg" },
  soundcloud: { color: "rgb(255, 87, 0)", src: "assets/social/soundcloud.svg" },
  spotify: { color: "rgb(46, 189, 89)", src: "assets/social/spotify.svg" },
} as const;

const SocialIcon = ({
  platform,
}: {
  platform: keyof typeof SOCIAL_ICON_MAP;
}) => {
  const icon = SOCIAL_ICON_MAP[platform];
  return (
    <Box py={2} px={2} flexShrink={0} background={icon.color} borderRadius={"full"}>
      <Image width={24} height={24} alt={`${platform} icon`} src={icon.src} />
    </Box>
  );
};

export default SocialIcon;

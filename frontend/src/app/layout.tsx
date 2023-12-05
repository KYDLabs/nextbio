import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import KYDLabsFooter from "@/components/kyd-labs-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Nasty",
  description: "KYD Labs Inc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box
            bg="gray.50"
            p={[0, 4]}
            backgroundImage={
              "linear-gradient(322.9deg, rgb(139, 139, 139) -32.49%, rgb(0, 0, 0) 30.1%, rgb(51, 46, 56) 97.31%)"
            }
            height={"100%"}
            minH={"100vh"}
          >
            {children}
            <KYDLabsFooter />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

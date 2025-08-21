import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import theme from "@/config/themeConfig";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CareFence - Healthcare Shift Management System",
  description: "Clock in within the safe zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}

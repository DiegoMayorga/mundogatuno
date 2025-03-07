import MainHeader from "@/components/main-header/main-header";
import "./globals.scss";
import { ReactNode } from "react";

export const metadata = {
  title: "Mundo Gatuno",
  description: "Food to Cats.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

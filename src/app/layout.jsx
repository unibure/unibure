import "./globals.css";
import { Nunito_Sans, Black_Han_Sans } from "next/font/google";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Mouse from "./components/mouse";

export const metadata = {
  title: "unibure portfolio",
  description: "unibure portfolio",
};
const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--ff-primary",
});

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${blackHanSans.variable}`}>
        <Header />
        <Mouse />
        <SideBar />
        {children}
      </body>
    </html>
  );
}

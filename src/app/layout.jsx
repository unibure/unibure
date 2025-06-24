import "./globals.css";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Mouse from "./components/mouse";
import MainText from "./components/mainText";
import Contact from "./components/contact";

export const metadata = {
  title: "unibure portfolio",
  description: "unibure portfolio",
};

const notoSansKR = Noto_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--ff-primary",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--ff-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable} ${montserrat.variable}`}>
        {/* <img src={`${process.env.BASE_PATH}/images/back.jpg`} alt="me" /> */}
        <Header />
        <Mouse />
        <SideBar />
        <MainText />
        {children}
        {/* <Contact /> */}
      </body>
    </html>
  );
}

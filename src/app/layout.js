// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Sidebar from "./components/Sidebar";
import NavigationBar from "./components/NavigationBar";
import Image from "next/image";
// import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-slate-950'>
      <body className="dark text-black flex w-[100%] h-screen relative" >
        {/* <Sidebar /> */}
        <main className="w-full h-full bg-white relative  top-0 z-40">

          <Provider>
            <img src="/logo-transparent-with-pic.jpg" className="w-full p-5 px-40 h-[200px]" id="up" />
            <NavigationBar />
            <div className="w-full bg-white ">{children}</div>
            <>
              <div className="w-full h-fit bg-[#4E31AA] border-gray-800 border-t-1 p-10 flex justify-center gap-20 items-center">
                <Image width={400} height={350} src="/lower-card.jpg" className="w-full flex-[0.5]  h-[200px]" />
                <Image width={400} height={350} src="/cga-card.jpg" className="w-full flex-[0.5]  h-[200px]" />
              </div>
              <div className="w-full h-fit bg-[#4E31AA] border-gray-800 border-t-1 p-10 flex justify-center items-center">
                <Link href="#up" className="text-white font-bold">Back to top</Link>
              </div>
            </>
          </Provider>
        </main>
      </body>
    </html>
  );
}

import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins, Unbounded } from "next/font/google";
import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from '@/components/header';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeContextProvider from '@/context/theme-context';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});


const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["500"],
});

//Data shown in the website header.
export const metadata = {
  title: "Aritra's Portfolio",
  description: 'This an updated version of Protfolio, which has been created using Next.Js, Framer Motion and Tailwind Css',
}

interface RootLayoutProps{
  children: React.ReactNode
}
//The root component of the Application.
//Destructuring the children passed as a prop.
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
    <head>
        <link rel="icon" href="/icon.png" sizes="any" />
    </head>
    <body
        className={`${poppins.variable} ${unbounded.variable}   bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
    >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Toaster position="top-right" />
                <ThemeSwitch />
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
    </body>
</html>
);
}
//Here the {children} refers to all the data/component listed inside page.tsx
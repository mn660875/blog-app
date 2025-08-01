import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ui/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      
        <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         >
        <ToastContainer position="top-center" autoClose={2000}/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

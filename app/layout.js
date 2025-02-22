import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Jasper Bushey Portfolio",
  description: "My fantastical and fabulous work... Including the site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        <meta name="theme-color" content="skyblue"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

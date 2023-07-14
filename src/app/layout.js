'use client';
import { useState, useEffect } from 'react'
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";
import styles from "./Products.module.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sacs pour homme et femme!",
//   description: "Sacs pour homme et femme",
//   generator: "kib-shop.com",
//   applicationName: "kib shop",
//   referrer: "origin-when-cross-origin",
//   keywords: ["kib shop", "shopping", "sac"],
//   authors: [{ name: "kib shop" }, { name: "kib shop", url: "kib-shop.com" }],
// };

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <html lang="fr">
       {/* <head>
       {isClient ?
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        : null} 
        </head> */}
        
        <body className={inter.className}>
        <Navbar />
          <div className={styles.mainContainer}>{children}</div>
          {/* <main className={styles.main}>{children}</main> */}
        </body>
      </html>
    </>
  );
}

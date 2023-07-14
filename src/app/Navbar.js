"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/navbar.module.css";

export const metadata = {
  title: "Sacs pour homme et femme!",
  description: "Sacs pour homme et femme",
}

function Navbar() {
  // ========================================== STICKY ===============================================================
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  // =========================================================================================================

  const [bar, setBar] = useState({ clicked: false });
  const handleClick = () => {
    setBar({ clicked: !bar.clicked });
  };

  return (
    <>
        {/* <nav className={props.myClassName} ref={props.myRef}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <a href="/">
        <svg id="logo-13" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z" class="ccustom" fill="#442781"></path> <path d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z" class="ccompli1" fill="#61459C"></path> <path d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z" class="ccompli2" fill="#A992DB"></path> <path d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z" class="ccustom" fill="#FF7917"></path> </svg>
        </a> */}
    <div className={`${styles.navbar} ${styles.sticky}`} ref={headerRef}>
      <ul className={bar.clicked ? `${styles.active}` : null}>
      {/* <ul className={bar.clicked ? "#navbar active" : "#navbar"}> */}
        <li>
          <Link href="/sacs-bandouliere-femme">sacs bandouliere femme</Link>
        </li>
        <li>
          <Link href="/sacs-bandouliere-homme">sacs bandouliere homme</Link>
        </li>
        <li>
          <Link href="/sacs-banane">sacs banane</Link>
        </li>
        <li>
          <Link href="/sacs-cabas">sacs cabas</Link>
        </li>
        <li>
          <Link href="/sacs-de-voyage">sacs de voyage</Link>
        </li>
        <li>
          <Link href="/sacs-a-dos">sacs a dos</Link>
        </li>
      </ul>
      <div className={styles.mobile} onClick={handleClick}>
        <i
          id="bar"
          className={bar.clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </div>
    </>
  );
}

export default Navbar;

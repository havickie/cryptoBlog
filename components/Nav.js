import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../public/logo_long.png";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <a className={styles.logo} href="">
        <Image width={200} height={60} src={logo} alt="Logo" />
      </a>

      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={styles.navigationMenu}>
        <ul>
          <li>
            <a className={styles.links} href="https://naira4dollar.com/how">
              {" "}
              HOW TO BUY/SELL
            </a>
          </li>
          <li>
            <a
              className={styles.links}
              href="https://naira4dollar.com/termsandconditions"
            >
              {" "}
              TERMS & CONDITIONS
            </a>
          </li>
          <li>
            <a
              className={styles.links}
              href="https://naira4dollar.com/contactus"
            >
              CONTACTS
            </a>
          </li>
          <li>
            <a
              className={`${styles.link} ${styles.btn2}`}
              href="https://naira4dollar.com/login"
            >
              LOGIN
            </a>
          </li>
          <li>
            <a
              className={`${styles.link} ${styles.btn1}`}
              href="https://naira4dollar.com/joinus"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

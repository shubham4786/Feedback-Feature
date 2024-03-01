import React from "react";
import Link from "next/link";
import styles from "./styles/NavigationBar.module.css";

const NavigationBar = ({ isLoggedIn, onLogout, onLogin }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span>THE PRODUCT PLATFORM</span>
        </Link>
      </div>
      <div className={styles.rightSection}>
        {isLoggedIn ? (
          <button onClick={onLogout} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
          <button onClick={onLogin} className={styles.logoutButton}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.logo}>
        <h1>Anthony's Personal Website</h1>
      </div>
      <nav className={style.navList}>
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="/blogs" className={style.link}>
          Blogs
        </Link>
        <Link href="/resume" className={style.link}>
          Resume
        </Link>
        <Link href="/about" className={style.link}>
          Contact Me
        </Link>
      </nav>
    </header>
  );
}

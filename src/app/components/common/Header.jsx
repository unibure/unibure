'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const gnbAni = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay: 1 },
};

export default function Header() {
  return (
    <header id="intro-header">
      {/* header */}
      <div className="header">
        <div className="top-head">
          <h1 className="title">
            <span data-cursor="title" data-name="welcome">
              Goun.dev
            </span>
          </h1>
        </div>

        <motion.nav
          initial={{ opacity: 0, width: 10, height: 10 }}
          animate={{ opacity: 1, width: '100%', height: 82.5 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
          className="gnb-nav"
        >
          <motion.a {...gnbAni} href="#about" className="gnb-btn">
            <span className="num">01</span>
            <h2 className="gnb">About</h2>
          </motion.a>
          <motion.a {...gnbAni} href="#skill" className="gnb-btn">
            <span className="num">02</span>
            <h2 className="gnb">Skill & Tools</h2>
          </motion.a>
          <motion.a {...gnbAni} href="#career" className="gnb-btn">
            <span className="num">03</span>
            <h2 className="gnb">Career</h2>
          </motion.a>
          <motion.a {...gnbAni} href="#project" className="gnb-btn">
            <span className="num">04</span>
            <h2 className="gnb">Project</h2>
          </motion.a>
          <motion.a {...gnbAni} href="#contact" className="gnb-btn">
            <span className="num">05</span>
            <h2 className="gnb">Contact</h2>
          </motion.a>
        </motion.nav>

        <nav className="etc">
          <a
            href="https://github.com/goun-dev"
            target="_blank"
            className="icon"
          >
            <svg
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4102 0.0292969C10.1704 0.0292969 0.914062 9.15342 0.914062 20.5254C0.914062 29.5173 6.79846 37.187 14.9969 39.9638C16.0548 40.1622 16.3854 39.501 16.3854 39.0382C16.3854 38.5754 16.3854 37.253 16.3193 35.4678C10.6332 36.7902 9.44312 32.691 9.44312 32.691C8.51749 30.3769 7.12904 29.7157 7.12904 29.7157C5.27776 28.3933 7.19516 28.3933 7.19516 28.3933C9.24478 28.4595 10.3687 30.5091 10.3687 30.5091C12.1539 33.6828 15.1953 32.7572 16.3193 32.1619C16.5176 30.8397 17.0465 29.9141 17.6416 29.3851C13.1457 28.9223 8.31913 27.1371 8.31913 19.3354C8.31913 17.0874 9.17866 15.3023 10.4349 13.9138C10.2365 13.451 9.50924 11.3353 10.6332 8.49225C10.6332 8.49225 12.4184 7.96331 16.3193 10.608C17.9722 10.1452 19.6912 9.88071 21.4765 9.88071C23.2615 9.88071 25.0467 10.079 26.6335 10.608C30.5343 8.02943 32.2533 8.49225 32.2533 8.49225C33.3774 11.2691 32.7162 13.451 32.4518 13.9138C33.7742 15.3023 34.5676 17.1536 34.5676 19.3354C34.5676 27.1371 29.7409 28.9223 25.2451 29.3851C25.9723 30.0463 26.6335 31.3685 26.6335 33.22C26.6335 35.9968 26.5673 38.1786 26.5673 38.8398C26.5673 39.3688 26.9641 39.9638 27.9557 39.7654C36.022 37.0546 41.9064 29.4513 41.9064 20.3932C41.8402 9.15342 32.6502 0.0292969 21.4102 0.0292969Z"
                fill="#EDEDED"
              />
            </svg>
          </a>
          <button className="menu-btn">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

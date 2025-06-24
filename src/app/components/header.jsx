"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"; // useState 추가

export default function Header() {
  return (
    <header id="intro-header">
      {/* header */}
      <div className="header">
        <div className="top-head">
          <h1 className="title">
            <span data-cursor="title" data-name="welcome">
              Developer unibure
            </span>
          </h1>
        </div>

        <nav className="gnb-nav">
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="About">
              <span className="num">01</span>
              <h2 className="gnb-tit">About</h2>
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Skill">
              <span className="num">02</span>
              <h2 className="gnb-tit">Skill & Tools</h2>
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Career">
              <span className="num">03</span>
              <h2 className="gnb-tit">Career</h2>
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Work">
              <span className="num">04</span>
              <h2 className="gnb-tit">Project</h2>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

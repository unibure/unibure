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
              {/* <p className="gnb-desc">
                사용자 경험에 집중하는 열정적인 프론트엔드 개발자입니다.
              </p> */}
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Skill">
              <span className="num">02</span>
              <h2 className="gnb-tit">Skill</h2>
              {/* <p className="gnb-desc">
                Building fast, responsive, and efficient web applications.
              </p> */}
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="WebSite">
              <span className="num">03</span>
              <h2 className="gnb-tit">Project</h2>
              {/* <p className="gnb-desc">
                Explore my portfolio of diverse frontend projects.
              </p> */}
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Career">
              <span className="num">04</span>
              <h2 className="gnb-tit">Career</h2>
              {/* <p className="gnb-desc">
                Explore my portfolio of diverse frontend projects.
              </p> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

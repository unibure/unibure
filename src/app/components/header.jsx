"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"; // useState 추가

export default function Header() {
  // const cursorParent = useRef(null);
  // const cursorChild = useRef(null);
  // const [scale, setScale] = useState(1); // scale을 state로 관리
  // const [stage, setStage] = useState(""); // stage를 state로 관리

  // useEffect(() => {
  //   const handleCursorMove = (e) => {
  //     const cursorX = e.pageX - cursorParent.current.offsetWidth / 2;
  //     const cursorY = e.pageY - cursorParent.current.offsetHeight / 2;
  //     cursorParent.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

  //     switch (e.target.getAttribute("data-cursor")) {
  //       case "title":
  //         if (stage === "title") return;
  //         setScale(5);
  //         setStage("title");
  //         cursorParent.current.classList.add("cursor-text-mode");
  //         cursorChild.current.setAttribute(
  //           "data-name",
  //           e.target.getAttribute("data-name")
  //         );
  //         break;
  //       case "index":
  //         if (stage === "index") return;
  //         setScale(5);
  //         setStage("index");
  //         cursorParent.current.classList.add("cursor-text-mode");
  //         cursorChild.current.setAttribute(
  //           "data-name",
  //           e.target.getAttribute("data-name")
  //         );
  //         break;
  //       default:
  //         setScale(1);
  //         setStage("");
  //         cursorParent.current.classList.remove("cursor-text-mode");
  //         cursorChild.current.setAttribute("data-name", "");
  //     }
  //     // scale state가 변경된 직후에 style 적용
  //     requestAnimationFrame(() => {
  //       cursorChild.current.style.setProperty("--cursor-scale", scale);
  //     });
  //   };

  //   // mouse leave 시 커서 크기 줄어들기
  //   const handleCursorDown = () => {
  //     setScale((prev) => {
  //       const newScale = prev * 0.5;
  //       // scale 변경 직후 style 적용
  //       requestAnimationFrame(() => {
  //         cursorChild.current.style.setProperty("--cursor-scale", newScale);
  //       });
  //       return newScale;
  //     });
  //   };

  //   // mouseover 시 커서 크기 증가
  //   const handleCursorUp = () => {
  //     setScale((prev) => {
  //       const newScale = prev * 4;
  //       // scale 변경 직후 style 적용
  //       requestAnimationFrame(() => {
  //         cursorChild.current.style.setProperty("--cursor-scale", newScale);
  //       });
  //       return newScale;
  //     });
  //   };

  //   window.addEventListener("mousemove", handleCursorMove);
  //   window.addEventListener("mouseleave", handleCursorDown);
  //   window.addEventListener("mouseover", handleCursorUp);

  //   return () => {
  //     window.removeEventListener("mousemove", handleCursorMove);
  //     window.removeEventListener("mouseleave", handleCursorDown);
  //     window.removeEventListener("mouseover", handleCursorUp);
  //   };
  // }, [scale, stage]); // 의존성 배열에 scale과 stage 추가

  return (
    <header id="intro-header">
      {/* mouse circle */}
      {/* <div className="mouse-circle" id="mouse-circle" ref={cursorParent}>
        <div className="deco" ref={cursorChild}></div>
      </div> */}

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
              <h2 className="gnb-tit">About</h2>
              <p className="gnb-desc">
                Passionate frontend developer focused on user experience.
              </p>
              <span className="num">01</span>
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="Skill">
              <h2 className="gnb-tit">Skill</h2>
              <p className="gnb-desc">
                Building fast, responsive, and efficient web applications.
              </p>
              <span className="num">02</span>
            </div>
          </div>
          <div className="gnb-btn">
            <div className="page-go" data-cursor="index" data-name="WebSite">
              <h2 className="gnb-tit">Project</h2>
              <p className="gnb-desc">
                Explore my portfolio of diverse frontend projects.
              </p>
              <span className="num">03</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"; // useState 추가

export default function Mouse() {
  const cursorParent = useRef(null);
  const cursorChild = useRef(null);
  const [scale, setScale] = useState(1); // scale을 state로 관리
  //중복 렌더링/업데이트 방지 위해 state 사용
  const [stage, setStage] = useState(""); // stage를 state로 관리
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 }); // 마지막 마우스 위치 저장

  useEffect(() => {
    const handleCursorMove = (e) => {
      const cursorX = e.pageX - cursorParent.current.offsetWidth / 2;
      const cursorY = e.pageY - cursorParent.current.offsetHeight / 2;
      cursorParent.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      setLastMousePos({ x: e.pageX, y: e.pageY }); // 마우스 위치 저장

      switch (e.target.getAttribute("data-cursor")) {
        case "title":
          if (stage === "title") return;
          setScale(5);
          setStage("title");
          cursorParent.current.classList.add("cursor-text-mode");
          cursorChild.current.setAttribute(
            "data-name",
            e.target.getAttribute("data-name")
          );
          break;
        case "index":
          if (stage === "index") return;
          setScale(5);
          setStage("index");
          cursorParent.current.classList.add("cursor-text-mode");
          cursorChild.current.setAttribute(
            "data-name",
            e.target.getAttribute("data-name")
          );
          break;
        default:
          setScale(1);
          setStage("");
          cursorParent.current.classList.remove("cursor-text-mode");
          cursorChild.current.setAttribute("data-name", "");
      }
      // scale state가 변경된 직후에 style 적용
      requestAnimationFrame(() => {
        cursorChild.current.style.setProperty("--cursor-scale", scale);
      });
    };

    // mouse leave 시 커서 크기 줄어들기
    const handleCursorDown = (e) => {
      // 스크롤 이벤트 체크
      if (e.target === document.documentElement || e.target === document.body) {
        return; // 스크롤 시에는 scale 변경하지 않음
      }

      setScale((prev) => {
        const newScale = prev * 0.5;
        requestAnimationFrame(() => {
          cursorChild.current.style.setProperty("--cursor-scale", newScale);
        });
        return newScale;
      });
    };

    // mouseover 시 커서 크기 증가
    const handleCursorUp = (e) => {
      // 스크롤이나 불필요한 요소에 대한 이벤트 무시
      if (
        e.target === document.documentElement ||
        e.target === document.body ||
        e.target.classList.contains("some-excluded-class") // 특정 클래스 제외
      ) {
        return;
      }

      setScale((prev) => {
        const newScale = prev * 4;
        requestAnimationFrame(() => {
          cursorChild.current.style.setProperty("--cursor-scale", newScale);
        });
        return newScale;
      });
    };

    // 스크롤 시 커서 위치 갱신
    const handleScroll = () => {
      const cursorX = lastMousePos.x - cursorParent.current.offsetWidth / 2;
      const cursorY = lastMousePos.y - cursorParent.current.offsetHeight / 2;
      cursorParent.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    };

    window.addEventListener("mousemove", handleCursorMove);
    window.addEventListener("mouseleave", handleCursorDown);
    window.addEventListener("mouseover", handleCursorUp);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
      window.removeEventListener("mouseleave", handleCursorDown);
      window.removeEventListener("mouseover", handleCursorUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scale, stage, lastMousePos]); // lastMousePos 의존성 추가

  return (
    <div className="mouse-circle" id="mouse-circle" ref={cursorParent}>
      <div className="deco" ref={cursorChild}></div>
    </div>
  );
}

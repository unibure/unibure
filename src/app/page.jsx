"use client";

import { useEffect, useRef } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  const aniRefs = useRef([]);

  useEffect(() => {
    // 초기 상태 설정
    aniRefs.current.forEach((ref, index) => {
      if (ref) {
        const delay = index * 0.2;
        ref.style.opacity = 0;
        ref.style.transform = "translateY(200px)";
        ref.style.transition = `all 0.5s ease-in-out ${delay}s`;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = aniRefs.current.findIndex((ref) => ref === entry.target);
        const delay = index * 0.2;

        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition = `all .5s ease ${delay}s`;
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = "translateY(200px)";
          entry.target.style.transition = `all .5s ease ${delay}s`;
        }
      });
    });

    aniRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      aniRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });

      observer.disconnect();
    };
  }, []);

  return (
    <article>
      <section id="about">
        <div className="about-section section-layout">
          <h3 className="tit" ref={(el) => (aniRefs.current[0] = el)}>
            About Me
          </h3>
          <div className="about-cont" ref={(el) => (aniRefs.current[1] = el)}>
            <p className="desc">
              안녕하세요. <br />
              저는 현재 웹 개발자로 일하고 있는 이고운입니다. <br />
              웹 개발을 좋아하고, 새로운 기술을 배우는 것을 좋아합니다. <br />
            </p>
            <p className="desc">
              현재는 직접 웹 서비스를 기획하고, 개발 및 배포를 진행하고 있고
              <span className="point">원활한 협업</span>과 <br />
              <span className="point"> 적극적인 커뮤니케이션을</span> 바탕으로
              사용자 경험을 지속적으로 개선해 나가고 있으며, <br /> 맡은 일에
              애정을 갖고 <span className="point">책임감 있게</span> 임하고
              있습니다.
            </p>
            <p className="desc">
              주어진 역할 속에서 가치를 창출하고, 제 역량을 충분히 발휘하며{" "}
              <br />
              <span className="point">성장하는 개발자가</span> 되고자 합니다.
            </p>
          </div>
        </div>
        {/* <div className="about-detail" ref={(el) => (aniRefs.current[2] = el)}>
          <div className="about-me">
            <img
              src={`${process.env.BASE_PATH}/images/about-me.png`}
              alt="me"
            />
          </div>
          <ul className="about-me-info">
            <li className="item name">
              <FaHeartPulse size={30} />
              <span className="txt">이고운</span>
            </li>
            <li className="item git-page">
              <FaGithub size={30} />
              <span className="txt">unibure.github.io</span>
            </li>
            <li className="item email">
              <IoIosMail size={30} />
              <span className="txt">unibure@gmail.com</span>
            </li>
          </ul>
        </div> */}
      </section>

      <section id="skill" className="skill-section section-layout">
        <h3 className="tit" ref={(el) => (aniRefs.current[3] = el)}>
          Skill & Tools
        </h3>
        <div className="skill-cont" ref={(el) => (aniRefs.current[4] = el)}>
          <div className="skill-item">
            <span className="skill-tit">Front End</span>
            <ul className="skill-list">
              <li className="item">
                <span className="sbj">HTML</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/html-logo.svg`}
                    alt="html"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">CSS</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/css-logo.svg`}
                    alt="css"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">JavaScript</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/js-logo.svg`}
                    alt="js"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">React</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/react-logo.svg`}
                    alt="react"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">Next.js</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/nextjs-logo.svg`}
                    alt="nextjs"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">PHP</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/php-logo.svg`}
                    alt="nextjs"
                  />
                </span>
              </li>
            </ul>
          </div>
          <div className="skill-item">
            <span className="skill-tit">Tools</span>
            <ul className="skill-list">
              <li className="item">
                <span className="sbj">Git</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/git-logo.svg`}
                    alt="git"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">GitHub</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/github-logo.svg`}
                    alt="github"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">Figma</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/figma-logo.svg`}
                    alt="figma"
                  />
                </span>
              </li>
              <li className="item">
                <span className="sbj">Tailwind</span>
                <span className="icon">
                  <img
                    src={`${process.env.BASE_PATH}/images/tailwind-logo.svg`}
                    alt="tailwind"
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="career" className="career-section section-layout">
        <h3 className="tit" ref={(el) => (aniRefs.current[5] = el)}>
          Career
        </h3>
        <div className="career-cont">
          <div
            className="career-item"
            ref={(el) => {
              aniRefs.current[6] = el;
            }}
          >
            <div className="head">
              <h4 className="sbj">WORK EXPERIENCE</h4>
              <span className="year">2022.12 ~ 재직중</span>
              <span className="company">웹 에이전시 알지비커뮤니케이션즈</span>
            </div>
            <ul className="desc">
              <li className="item">PHP, 그누보드 기반의 홈페이지 개발</li>
              <li className="item">
                PHP, React, Next.js 기반의 전자카탈로그 개발
              </li>
              <li className="item">홈페이지 기획 및 디자인</li>
              <li className="item">홈페이지 유지보수</li>
            </ul>
          </div>
          <div
            className="career-item"
            ref={(el) => {
              aniRefs.current[6] = el;
            }}
          >
            <div className="head">
              <h4 className="sbj">EDUCATION</h4>
              <span className="year">2022.06 ~ 2022.12</span>
              <span className="company">그린 아카데미 - 우수상 수료</span>
            </div>
            <ul className="desc">
              <li className="item">
                (디지털디자인) UI/UX 반응형 웹디자인 & 웹퍼블리셔(디자인&코딩)
                양성
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 추가예정 */}
      {/* <section id="project" className="section-layout"></section> */}
    </article>
  );
}

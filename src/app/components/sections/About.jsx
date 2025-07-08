'use client';

import { FaHeartPulse } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <div className="about-section section-layout">
        <div className="about-head">
          <h3 className="tit">About Me</h3>
          <div className="motion-svg">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_29_17)">
                <circle cx="150" cy="150" r="100" fill="#FFF308" />
              </g>
              <defs>
                <filter
                  id="filter0_f_29_17"
                  x="0"
                  y="0"
                  width="300"
                  height="300"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="25"
                    result="effect1_foregroundBlur_29_17"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="about-cont">
          <p className="desc">
            안녕하세요. <br />
            저는 현재 웹 개발자로 일하고 있는 이고운입니다. <br />
          </p>
          <p className="desc">
            웹 서비스 기획부터 개발, 배포까지 전 과정을 담당하며 사용자 중심의
            웹 서비스를 개발하고 있습니다. <br /> 새로운 기술에 대한 호기심과
            학습 의지를 바탕으로
            <motion.span
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="point"
            >
              지속적인 성장
            </motion.span>
            을 추구합니다.
          </p>
          <p className="desc !line-height-[2]">
            <span className="point !ml-[0px]">원활한 협업</span>과
            <span className="point">적극적인 커뮤니케이션</span>을 통해 사용자
            경험을 지속적으로 개선해 나가고 있으며, <br /> 맡은 일에
            <span className="point">책임감</span>을 가지고 끊임없이 성장하는
            개발자가 되고자 합니다.
          </p>
        </div>
      </div>
      {/* <div className="about-detail">
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
  );
}

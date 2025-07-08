import { motion } from 'framer-motion';
import Visual from './components/sections/Visual';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Career from './components/sections/Career';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';

console.log('motion:', motion);

export default function Home() {
  return (
    <article className="main-content">
      {/* <motion.span
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg width="47" height="63" viewBox="0 0 47 63" fill="none">
          <path
            d="M21.8431 44.8671C22.7581 45.7814 24.2413 45.7814 25.1566 44.8671L32.1878 37.8405C33.1034 36.9255 33.1041 35.4414 32.1891 34.5258C31.2741 33.6102 29.7903 33.6099 28.8747 34.5249L23.4997 39.8958L18.1256 34.5249C17.2099 33.6099 15.7259 33.6102 14.8109 34.5258C13.8959 35.4414 13.8964 36.9255 14.812 37.8405L21.8431 44.8671Z"
            fill="#CFCECE"
          />
          <path
            d="M23.5 22.2962C22.1194 22.2962 21 21.1769 21 19.7962C21 18.4155 22.1194 17.2959 23.5 17.2959C24.8806 17.2959 26 18.4152 26 19.7959C26 21.1766 24.8806 22.2962 23.5 22.2962Z"
            fill="#CFCECE"
          />
          <path
            d="M21 28.598C21 29.9786 22.1194 31.098 23.5 31.098C24.8806 31.098 26 29.9786 26 28.598C26 27.2173 24.8806 26.0977 23.5 26.0977C22.1194 26.0977 21 27.2173 21 28.598Z"
            fill="#CFCECE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5 0.25293C10.5558 0.25293 0.0625 10.7462 0.0625 23.6904V39.3155C0.0625 52.2596 10.5558 62.753 23.5 62.753C36.4441 62.753 46.9375 52.2596 46.9375 39.3155V23.6904C46.9375 10.7462 36.4441 0.25293 23.5 0.25293ZM4.75 23.6904C4.75 13.3351 13.1447 4.94043 23.5 4.94043C33.8553 4.94043 42.25 13.3351 42.25 23.6904V39.3155C42.25 49.6708 33.8553 58.0655 23.5 58.0655C13.1447 58.0655 4.75 49.6708 4.75 39.3155V23.6904Z"
            fill="#CFCECE"
          />
        </svg>
      </motion.span> */}
      <img
        src={`${process.env.BASE_PATH}/images/background-space.jpg`}
        alt="background-space"
        className="back-img"
      />
      <Visual />
      <About />
      <Skills />
      <Career />
      <Project />
      <Contact />
    </article>
  );
}

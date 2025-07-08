'use client';

import { motion } from 'framer-motion';

export default function Visual() {
  return (
    <section id="visual">
      <div className="visual-section">
        <motion.div
          className="back-circle"
          initial={{ opacity: 0, scale: 0, x: '0%', y: '10%' }}
          animate={{ opacity: 1, scale: 1, x: '-85%', y: '10%' }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            scale: { duration: 2, delay: 0 },
            y: { duration: 1, delay: 2 },
            x: { duration: 1, delay: 2 },
          }}
        >
          <div className="outer"></div>
          <div className="inner"></div>
        </motion.div>
        <div className="visual-head">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="typo"
          >
            <motion.span
              className="tit tit-1"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              Hello.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 1.5, delay: 3.5 }}
              className="tit tit-2"
            >
              I'm <b className="primary">Goun</b>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 1.5, delay: 4 }}
              className="tit tit-3"
            >
              Frontend Developer
            </motion.span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 5,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
            className="pp-button"
          >
            Contact Me
          </motion.button>
        </div>
        <div className="visual-cont">
          <div className="visual-img"></div>
        </div>
      </div>
    </section>
  );
}

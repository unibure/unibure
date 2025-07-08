import Visual from './components/sections/Visual';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Career from './components/sections/Career';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <article className="main-content">
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

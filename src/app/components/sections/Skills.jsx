'use client';

export default function Skills() {
  return (
    <section id="skill" className="skill-section section-layout">
      <h3 className="tit">Skill & Tools</h3>
      <div className="skill-cont">
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
  );
}

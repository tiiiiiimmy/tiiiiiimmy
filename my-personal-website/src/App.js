// File: src/App.js
import React from 'react';
import './App.css';

const App = () => {
  const works = [
    { title: 'UXI Design Work 1', link: '/work1' },
    { title: 'UXI Design Work 2', link: '/work2' },
    { title: 'UXI Design Work 3', link: '/work3' },
    { title: 'UXI Design Work 4', link: '/work4' },
    { title: 'Industrial Design Collection', link: '/industrial' },
  ];

  return (
    <div className="homepage">
      {/* Cover Image Section */}
      <header className="cover-section">
        <img
          src="/assets/cover.png"
          alt="Cover"
          className="cover-image"
        />
        <h1 className="website-title">Welcome to TIMMI</h1>
      </header>

      {/* Self-Introduction Section */}
      <section className="introduction-section">
        <h2>About Me</h2>
        <p>
          Hello! I’m a designer specializing in User Experience and Industrial Design.
          I’m passionate about creating intuitive, beautiful designs that inspire and engage users.
        </p>
      </section>

      {/* Works Section */}
      <section className="works-section">
        <h2>My Works</h2>
        <ul className="works-list">
          {works.map((work, index) => (
            <li key={index}>
              <a href={work.link} className="work-link">
                {work.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;

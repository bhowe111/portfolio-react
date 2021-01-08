import React from "react";

export default function Header() {
  return (
    <div className="nav-wrapper">
      <p style="color: var(--mainText)">Change Theme</p>
      <ul className="navigation">
        <li data-mode="light" id="light-mode" className="theme-dot"></li>
        <li data-mode="gold" id="gold-mode" className="theme-dot"></li>
      </ul>

      <ul className="navigation">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brendan-howe/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/bhowe111">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

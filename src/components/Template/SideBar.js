import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <a href="https://magiceden.io/item-details/AFz4DS16hAgyXhNvFm9MCr8XmsgFLbgd9sRnPgE42A6b" className="logo">
        <img src={`${PUBLIC_URL}/images/1556.png`} alt="" />
      </a>
      <header>
        <h2>SciWalker</h2>
        <p><a href="mailto:thesciwalker@gmail.com">thesciwalker@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m SciWalker. I like solving and building things.
        Science and tech (AI/ML,crypto) are my buddies.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/projects') ? <Link to="/projects" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; SciWalker <Link to="/">sciwalker.eth</Link>.</p>
    </section>
  </section>
);

export default SideBar;

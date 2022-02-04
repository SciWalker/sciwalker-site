import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"SciWalker's website. "
    + 'Founder of Aeonheroes and Percepx Arts'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">SciWalker</Link></h2>
          <p>
            My abstracted crypto identity
          </p>
        </div>
      </header>
      <p> Welcome to my web3 page. </p>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Vive la Crypto Revolution! </p>
    </article>
  </Main>
);

export default Index;

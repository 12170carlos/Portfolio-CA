import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Portfolio } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems:"center", color:"white", marginBottom:"20;"}}>
        <DiCssdeck size="3rem" /> <Portfolio>Portfolio</Portfolio>

      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
         </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologies</NavLink>
         </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
         </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/12170carlos'>
        <AiFillGithub size="3rem"/>

      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/carlosalvarado2706/'>
        <AiFillLinkedin size="3rem"/>

      </SocialIcons>
      <SocialIcons href='https://github.com/12170carlos'>
        <AiFillInstagram size="3rem"/>

      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

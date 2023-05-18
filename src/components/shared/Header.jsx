import { Cross as Hamburger } from 'hamburger-react';
import s from '@/styles/Header.module.css';
import { useState } from 'react';
import MobileHeader from './MobileHeader';
import Link from 'next/link';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={`container ${s.header}`}>
        <Link href="/">
          <div>
            <img src="./assets/icons/logo.svg" alt="Azart-tech logo" />
          </div>
        </Link>
        <nav className={s.nav}>
          {menu ? (
            <ul>
              <li>
                <a href="#webdev">Web development</a>
              </li>
              <li>
                <a href="#services">All services</a>
              </li>
              <li>
                <a href="#stacks">Stack</a>
              </li>
              <li>
                <Link href="/cases">Cases</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <a href="#">Scheme of work</a>
              </li>
              <li>
                <a href="#">Free zoom</a>
              </li>
            </ul>
          ) : (
            ''
          )}
        </nav>
        <div className={s.btns}>
          <a href="https://t.me/+971585025388" target="_blank">
            <img src="./assets/icons/telegram.svg" alt="telegram" />
          </a>
          <Hamburger color="#fff" toggled={menu} toggle={setMenu} />
        </div>
      </header>
      <div className={s.mob_header}>
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;

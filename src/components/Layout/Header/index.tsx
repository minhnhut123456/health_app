import { useNavigate } from 'react-router-dom';

import LogoIcon from '#/assets/images/common/logo.svg?react';
import NavIcon1 from '#/assets/images/common/nav-icon-1.svg?react';
import NavIcon2 from '#/assets/images/common/nav-icon-2.svg?react';
import NavIcon3 from '#/assets/images/common/nav-icon-3.svg?react';

import classes from './style.module.css';

const navs = [
  { title: '自分の記録', Icon: NavIcon1, navigate: '/my-record' },
  { title: 'チャレンジ', Icon: NavIcon2 },
  { title: 'お知らせ', Icon: NavIcon3, navigate: '/column' },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <LogoIcon
        className={classes.logo}
        onClick={() => {
          navigate('/');
        }}
      />
      <div className={classes.navsWrapper}>
        {navs.map((nav, idx) => (
          <div
            className={classes.nav}
            key={idx}
            onClick={() => {
              if (nav.navigate) {
                navigate(nav.navigate);
              }
            }}
          >
            <nav.Icon />
            <div className={classes.navTitle}>{nav.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

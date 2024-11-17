import clsx from 'clsx';
import { useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate } from 'react-router-dom';

import HambugerIcon from '#/assets/images/common/hambuger.svg?react';

import classes from './style.module.css';

type Props = {
  onClose?: () => void;
  classNameMenu?: string;
  classNameIcon?: string;
};

const data = [
  {
    title: '自分の記録',
    href: '/my-record',
  },
  {
    title: '体重グラフ',
  },
  {
    title: '目標',
  },
  {
    title: '選択中のコース',
  },
  {
    title: 'コラム一覧',
    href: '/column',
  },
  {
    title: '設定',
  },
];

const DrawerMenu = ({ classNameIcon, classNameMenu }: Props) => {
  const navigate = useNavigate();
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);
  const refIcon = useRef(null);

  return (
    <>
      <HambugerIcon
        ref={refIcon}
        className={classNameIcon}
        onClick={() => {
          setShowDrawerMenu((prev) => !prev);
        }}
      />

      {showDrawerMenu ? (
        <ClickAwayListener
          onClickAway={(event) => {
            if (event.target && refIcon.current) {
              const el = event.target as HTMLElement;
              const icon = refIcon.current as SVGAElement;

              if ((el.isEqualNode(refIcon.current), icon.contains(el))) {
                return;
              }
            }
            setShowDrawerMenu(false);
          }}
        >
          <div className={clsx(classes.wrapper, classNameMenu)}>
            {data.map((item) => (
              <div
                className={classes.item}
                key={item.title}
                onClick={() => {
                  if (item.href) {
                    navigate(item.href);
                  }
                  setShowDrawerMenu(false);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </ClickAwayListener>
      ) : null}
    </>
  );
};

export default DrawerMenu;

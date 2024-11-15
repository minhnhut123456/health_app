import { ReactNode } from 'react';

import Header from './Header';
import classes from './style.module.css';

const Layout = ({ children }: { children: JSX.Element | ReactNode }): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

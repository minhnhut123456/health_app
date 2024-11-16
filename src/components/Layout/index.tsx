import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import ScrollTop from './ScrollTop';
import classes from './style.module.css';

const Layout = ({ children }: { children: JSX.Element | ReactNode }): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {children}
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Layout;

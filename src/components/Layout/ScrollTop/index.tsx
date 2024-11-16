import Icon from './icon.svg?react';
import classes from './style.module.css';

const ScrollTop = () => {
  return (
    <Icon
      className={classes.icon}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      }}
    />
  );
};

export default ScrollTop;

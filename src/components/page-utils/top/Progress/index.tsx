import { Progress } from '#/types';

import ProgressCircle from './ProgressCircle';
import classes from './style.module.css';
type Props = {
  data: Progress;
};

const ProgressComponent = ({ data }: Props) => {
  const { image, percent, sum, current } = data;

  return (
    <div className={classes.wrapper}>
      {image ? <img src={image} /> : <div className={classes.placeholder}></div>}
      <ProgressCircle percentage={percent} />

      <div className={classes.text}>
        <span>
          {current}/{sum}
        </span>
        &nbsp;
        {percent}%
      </div>
    </div>
  );
};

export default ProgressComponent;

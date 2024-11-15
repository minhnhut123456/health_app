import RecordsComponent from '#/components/page-utils/top/Records';
import { RECORDS } from '#/mockData';

import classes from './style.module.css';

const TopPage = () => {
  return (
    <div>
      <div className={classes.process}></div>
      <div className={classes.wrapperRecords}>
        <RecordsComponent data={RECORDS} />
      </div>
    </div>
  );
};

export default TopPage;

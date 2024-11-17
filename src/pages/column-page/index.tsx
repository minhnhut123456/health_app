import ColumnComponent from '#/components/page-utils/column/Column';
import { COLUMN_RECORDS } from '#/mockData';

import classes from './style.module.css';

const ColumnPage = () => {
  return (
    <div className={classes.wrapper}>
      <ColumnComponent data={COLUMN_RECORDS} />
    </div>
  );
};

export default ColumnPage;

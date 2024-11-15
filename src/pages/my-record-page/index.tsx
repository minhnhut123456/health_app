import Diary from '#/components/page-utils/my-record/Diary';
import Excercises from '#/components/page-utils/my-record/Excercises';
import Intro from '#/components/page-utils/my-record/Intro';
import Spacing from '#/components/Spacing';
import { DIARY_RECORDS, EXCERCISE } from '#/mockData';

import classes from './style.module.css';

const MyRecordPage = () => {
  return (
    <div className={classes.wrapper}>
      <Intro />
      <Spacing my='2rem'>
        <Excercises data={EXCERCISE} />
      </Spacing>
      <Diary data={DIARY_RECORDS} />
    </div>
  );
};

export default MyRecordPage;

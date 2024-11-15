import { Col, Container, Row } from 'react-grid-system';

import useDiary from '#/hooks/useDiary';
import { DiaryRecord } from '#/types';

import classes from './style.module.css';

type Props = {
  data: DiaryRecord[];
};

const Diary = ({ data }: Props) => {
  const { displayData, hasMore, loadMore } = useDiary(data);

  return (
    <Container>
      <div className={classes.header}>MY DIARY</div>

      <div>
        <Row className={classes.row}>
          {displayData.map((item, idx) => (
            <Col xs={12} sm={6} lg={3} key={idx}>
              <div className={classes.record}>
                <div className={classes.date}>{item.date}</div>
                <div className={classes.time}>{item.time}</div>
                <div className={classes.content}>{item.content}</div>
              </div>
            </Col>
          ))}
        </Row>

        {hasMore && (
          <div className={classes.btnWrapper}>
            <button className={classes.moreBtn} onClick={loadMore}>
              自分の日記をもっと見る
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Diary;

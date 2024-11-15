import { Col, Container, Row } from 'react-grid-system';

import useColumns, { CATEGOGIES } from '#/hooks/useColumns';
import { ColumnRecord } from '#/types';

import classes from './style.module.css';

type Props = {
  data: ColumnRecord[];
};
const ColumnComponent = ({ data }: Props) => {
  const { displayData, loadMore, hasMore, changeByCategory } = useColumns(data);

  return (
    <Container>
      <Row gutterWidth={50} className={classes.rowCategory}>
        {CATEGOGIES.map((item, idx) => (
          <Col xs={12} md={6} lg={3} key={idx}>
            <div
              className={classes.category}
              onClick={() => {
                changeByCategory(item.name);
              }}
            >
              <div className={classes.title}>{item.title}</div>
              <div className={classes.divider} />
              <div className={classes.description}>{item.description}</div>
            </div>
          </Col>
        ))}
      </Row>

      <Row className={classes.rowRecord}>
        {displayData.map((item, idx) => (
          <Col xs={12} sm={6} lg={3} key={idx}>
            <div className={classes.record}>
              <div className={classes.topContent}>
                <img src={item.image} />
                <div className={classes.title}>
                  {item.date} {item.time}
                </div>
              </div>

              <div className={classes.content}>{item.content}</div>
              {item.tags?.length && (
                <div className={classes.tags}>
                  {item.tags.map((tag) => (
                    <div key={tag}>#{tag}</div>
                  ))}
                </div>
              )}
            </div>
          </Col>
        ))}
      </Row>

      {hasMore && (
        <div className={classes.btnWrapper}>
          <button className={classes.moreBtn} onClick={loadMore}>
            記録をもっと見る
          </button>
        </div>
      )}
    </Container>
  );
};

export default ColumnComponent;

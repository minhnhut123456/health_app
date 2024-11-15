import { Col, Container, Row } from 'react-grid-system';

import useRecords, { CATEGOGIES } from '#/hooks/useRecords';
import { Record } from '#/types';

import classes from './style.module.css';

type Props = {
  data: Record[];
};
const RecordsComponent = ({ data }: Props) => {
  const { displayData, loadMore, hasMore, changeByCategory } = useRecords(data);

  return (
    <div>
      <div className={classes.wrapperCategories}>
        {CATEGOGIES.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              changeByCategory(item.name);
            }}
          >
            <img src={item.image} />
          </div>
        ))}
      </div>

      <div className={classes.wrapperRecords}>
        <Container>
          <Row className={classes.row}>
            {displayData.map((item, idx) => (
              <Col xs={12} sm={6} lg={3} key={idx}>
                <div className={classes.record}>
                  <img src={item.image} />
                  <p>{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {hasMore && (
          <div className={classes.btnWrapper}>
            <button className={classes.moreBtn} onClick={loadMore}>
              記録をもっと見る
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordsComponent;

import { CSSProperties } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import { Excercise } from '#/types';

import classes from './style.module.css';

type Props = {
  data: Excercise;
  style?: CSSProperties;
};
const Excercises = ({ data, style }: Props) => {
  const { date, records } = data;

  return (
    <Container style={style}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.title}>MY EXERCISE</div>
          <div className={classes.date}>{date}</div>
        </div>

        <Row gutterWidth={50} className={classes.row}>
          {records.map((item, idx) => (
            <Col xs={12} md={6} key={idx} className={classes.col}>
              <div className={classes.item}>
                <div className={classes.leftContent}>
                  ●
                  <div className={classes.leftText}>
                    <div className={classes.colTitle}>{item.title}</div>
                    <div className={classes.colDescription}>{item.enegy}</div>
                  </div>
                </div>
                <div className={classes.rightContent}>
                  <div className={classes.colTime}>{item.time}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Excercises;

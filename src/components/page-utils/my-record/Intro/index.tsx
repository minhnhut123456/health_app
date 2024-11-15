import { Col, Container, Row } from 'react-grid-system';

import myRecord1 from '#/assets/images/mockData/my-record-1.jpg';
import myRecord2 from '#/assets/images/mockData/my-record-2.jpg';
import myRecord3 from '#/assets/images/mockData/my-record-3.jpg';

import classes from './style.module.css';

const data = [
  {
    title: 'BODY RECORD',
    description: '自分のカラダの記録',
    image: myRecord1,
  },
  {
    title: 'MY EXERCISE',
    description: '自分の運動の記録',
    image: myRecord2,
  },
  {
    title: 'MY DIARY',
    description: '自分の日記',
    image: myRecord3,
  },
];

const Intro = () => {
  return (
    <Container>
      <Row justify='center' gutterWidth={80} className={classes.row}>
        {data.map((item, idx) => (
          <Col xs={12} sm={6} lg={4} key={idx} className={classes.col}>
            <div className={classes.item}>
              <img src={item.image} />
              <div className={classes.text}>
                <p className={classes.colTitle}>{item.title}</p>
                <p className={classes.colDescription}>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Intro;

import { Col, Row } from 'react-grid-system';

import classes from './style.module.css';

const items = [
  { title: '会員登録' },
  { title: '運営会社' },
  { title: '利用規約' },
  { title: '個人情報の取扱について' },
  { title: '特定商取引法に基づく表記' },
  { title: 'お問い合わせ' },
];

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <Row className={classes.row}>
        {items.map((item, idx) => (
          <Col xs={6} sm={3} lg={2} key={idx}>
            {item.title}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;

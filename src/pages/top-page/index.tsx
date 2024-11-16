import { Col, Hidden, Row, Visible } from 'react-grid-system';

import Chart from '#/components/page-utils/top/Chart';
import ProgressComponent from '#/components/page-utils/top/Progress';
import RecordsComponent from '#/components/page-utils/top/Records';
import { PROGRESS, RECORDS } from '#/mockData';

import classes from './style.module.css';

const TopPage = () => {
  return (
    <div>
      <Row gutterWidth={0} className={classes.row}>
        <Col xs={12} md={7}>
          <ProgressComponent data={PROGRESS} />
        </Col>

        {/* Conflit bug between grid and chart library ==> use some trick */}
        <Hidden sm xs>
          <Col xs={12} md={5}>
            <Chart />
          </Col>
        </Hidden>

        <Visible sm xs>
          <Col xs={12}>
            <Chart />
          </Col>
        </Visible>
      </Row>

      <div className={classes.wrapperRecords}>
        <RecordsComponent data={RECORDS} />
      </div>
    </div>
  );
};

export default TopPage;

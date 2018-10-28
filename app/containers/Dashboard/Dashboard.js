import React from 'react';
import { Row, Col } from 'reactstrap';
import Poster from '../Poster/Poster';
import Announcement from '../Announcement/Announcement';
import Quizes from '../Quizes/Quizes';

function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Poster />
        </Col>
      </Row>
      <Row>
        <Col md={9} sm={12}>
          <Announcement />
        </Col>
        <Col md={3} sm={12}>
          <Quizes />
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;

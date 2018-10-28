import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import styles from './Announcement.css';
import AnnouncementService from '../AnnouncementService/AnnouncementService';
import FakeAnnouncmentService from '../FakeAnnouncmentService/FakeAnnouncmentService';

export default class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }

  render() {
    return (
      <Row className={styles.container}>
        <Col xs="12" className={styles.content}>
          <label
            onClick={() => {
              this.setState(state => ({ expand: !state.expand }));
            }}
            className={styles.expand}
          >
            {this.state.expand ? 'Collapse' : 'All'}
          </label>
          <h1 className={styles.header}>Announcement</h1>
          <p className={styles.byword}>We educate warriors! Keep updated :]</p>
          <AnnouncementService expand={this.state.expand} />
          <FakeAnnouncmentService />
        </Col>
      </Row>
    );
  }
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import styles from './FakeAnnouncmentService.css';
import FakeData from '../FakeData';
export default class FakeAnnouncmentService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
    };
  }

  componentDidMount() {
    const calls = FakeData.announcements.map((call, index) => (
      <Row className={styles.announcementContent} key={call.id}>
        <Col xs={3}>
          <Row>
            <Col lg={3} md={5}>
              <img
                src={`https://randomuser.me/api/portraits/men/${index +
                  30}.jpg`}
                alt=""
                className={styles.userPicture}
              />
            </Col>
            <Col lg={9} md={7}>
              <h5 className={styles.userName}>{call.profileName}</h5>
              <span className={styles.userSubject}>{call.profileSubject}</span>
            </Col>
          </Row>
        </Col>
        <Col xs={9}>
          <p>{call.Discribtion}</p>
        </Col>
      </Row>
    ));
    this.setState({
      announcements: calls,
    });
  }

  render() {
    return <div>{this.state.announcements}</div>;
  }
}

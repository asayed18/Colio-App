import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import styles from './AnnouncementService.css';
import API from '../Api';

const myApi = new API({ url: 'http://test.coligolms.com/api' });
export default class AnnouncementService extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      announcements: [],
      expand: this.props.expand,
    };
  }

  fetchData(expand) {
    myApi.createEntity({ name: 'announcement' });
    myApi.endpoints.announcement.getAll({}).then(({ data }) => {
      const calls = (expand ? data : data.splice(0, 0)).map((call, index) => (
        <Row className={styles.announcementContent} key={call.id}>
          <Col xs={3}>
            <Row>
              <Col lg={3} md={5}>
                <img
                  src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                  alt=""
                  className={styles.userPicture}
                />
              </Col>
              <Col lg={9} md={7}>
                <h5 className={styles.userName}>{call.profileName}</h5>
                <span className={styles.userSubject}>
                  {call.profileSubject}
                </span>
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
        expand,
      });
    });
  }

  componentDidMount() {
    this.fetchData(this.state.expand);
  }

  propTypes = {
    expand: PropTypes.string.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.expand);
  }

  render() {
    return <div>{this.state.announcements}</div>;
  }
}

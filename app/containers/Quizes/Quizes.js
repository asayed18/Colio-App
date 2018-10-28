import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import styles from './Quizes.css';
import QuizesService from '../QuizesService/QuizesService';
import FakeQuizesService from '../FakeQuizesService/FakeQuizesService';

export default class Quizes extends React.Component {
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
          <h1 className={styles.header}>What&apos;s due</h1>
          <p className={styles.byword}>
            {'Sometimes "Later" becomes "Never", Go now'}
          </p>
          <QuizesService expand={this.state.expand} />
          <FakeQuizesService />
        </Col>
      </Row>
    );
  }
}

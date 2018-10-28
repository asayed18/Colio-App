import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import styles from './FakeQuizesService.css';
import FakeData from '../FakeData';

export default class FakeQuizesService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: [],
    };
  }

  componentDidMount() {
    const calls = FakeData.quizes.map(call => (
      <Row className={styles.quizContainer} key={call.id}>
        <Col xs={12}>
          <div className={styles.icon}>
            <i
              className={
                call.type === 'quiz'
                  ? 'fas fa-hourglass-half fa3x'
                  : 'fas fa-clipboard-check fa3x'
              }
            />
          </div>

          <span className={styles.quizContent}>{call.title}</span>
          <p>Course: {call.course}</p>
          <p>Topic: {call.topic}</p>
          <p>Due to: {call.dueDate}</p>
          <Button outline color="success" className={styles.button}>
            {call.type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'}
          </Button>
        </Col>
      </Row>
    ));
    this.setState({ quizes: calls });
  }

  render() {
    return <div>{this.state.quizes}</div>;
  }
}

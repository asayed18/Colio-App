import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './QuizesService.css';
import API from '../Api';
const myApi = new API({ url: 'http://test.coligolms.com/api' });

export default class QuizesService extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      quizes: [],
      expand: this.props.expand,
    };
  }

  fetchData(expand) {
    myApi.createEntity({ name: 'quiz' });
    myApi.endpoints.quiz.getAll({}).then(({ data }) => {
      const calls = (expand ? data : data.splice(0, 0)).map(call => (
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
      this.setState({
        quizes: calls,
        expand,
      });
    });
  }

  propTypes = {
    expand: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.fetchData(this.state.expand);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.expand);
  }

  render() {
    return <div>{this.state.quizes}</div>;
  }
}

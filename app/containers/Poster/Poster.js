import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import styles from './Poster.css';
import PosterImageMin from '../../images/content2.png';
import PosterImageMax from '../../images/content1.png';

const mql = window.matchMedia(`(min-width: 800px)`);

export default class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PosterImage: mql.matches ? PosterImageMax : PosterImageMin,
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  mediaQueryChanged() {
    this.setState({
      PosterImage: mql.matches ? PosterImageMax : PosterImageMin,
    });
  }

  render() {
    return (
      <Row className={styles.posterContainer}>
        <Col xs="12" className={styles.content}>
          <Row>
            <Col sm={7} className={styles.posterText}>
              <div className={styles.posterHeader}>
                <h1 className={styles.posterHeaderGrad}>EXAMS TIME</h1>
              </div>
              <span className={styles.posterDiscribtion}>
                Here we are, Are you ready to fight? Don&apos;t worry we prepare
                some tips to be ready for your exam
              </span>
              <h5 className={styles.byword}>
                {'"Nothing happens yntill something moves" - Albert Einstein'}
                <br />
                <br />
              </h5>
              <Button color="primary" size="lg" className={styles.button}>
                View exam tips
              </Button>
            </Col>
            <Col sm={5}>
              <img src={this.state.PosterImage} alt="alt" />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

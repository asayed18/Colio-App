/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'react-sidebar';
import styles from './SideBar.css';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const mql = window.matchMedia(`(min-width: 800px)`);
export default class SideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarShadow: true,
      sidebarOpen: true,
      sidebarDocked: mql.matches,
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open,
    });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <div className={styles.sidebarcontent}>
            <h1 href="/" className={styles.sideHeader}>
              Coligo
            </h1>
            <a href="Dashboard  " className={styles.sidebarItems}>
              <i className="fas fa-home fa-2x" />
              Dashboard
            </a>
            <a href="Schedule" className={styles.sidebarItems}>
              <i className="fas fa-calendar-alt fa-2x" />
              Schedule
            </a>
            <a href="Courses" className={styles.sidebarItems}>
              <i className="fas fa-book fa-2x" />
              Courses
            </a>
            <a href="Gradebook" className={styles.sidebarItems}>
              <i className="fas fa-graduation-cap fa-2x" />
              Gradebook
            </a>
            <a href="Performance" className={styles.sidebarItems}>
              <i className="fas fa-chart-line fa-2x" />
              Performance
            </a>
            <a href="Announcement" className={styles.sidebarItems}>
              <i className="fas fa-bullhorn fa-2x" />
              Announcement
            </a>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        docked={this.state.sidebarDocked}
        shadow={this.state.sidebarShadow}
        sidebarClassName={styles.sidebar}
        contentClassName={styles.content}
      >
        <div className={styles.sidebarContent}>{this.props.children}</div>
      </Sidebar>
    );
  }
}
SideBar.propTypes = { children: PropTypes.element.isRequired };

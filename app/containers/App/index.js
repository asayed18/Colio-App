/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SideBar from 'containers/SideBar/SideBar';
import NavBar from 'containers/NavBar/NavBar';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../../global-styles';
import styles from './App.css';
import Announcement from '../Announcement/Announcement';
import Dashboard from '../Dashboard/Dashboard';

export default function App() {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <SideBar>
        <NavBar />
        <Container className={styles.dashboard}>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Announcement" component={Announcement} />
        </Container>
      </SideBar>
      {/* <Switch> */}
      {/* <Route exact path="/" component={HomePage} /> */}
      {/* <Route component={NotFoundPage} /> */}
      {/* </Switch> */}
      <GlobalStyle />
    </div>
  );
}

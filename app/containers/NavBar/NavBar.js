import React from 'react';
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.css';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <Row className={styles.navbar}>
        <Col md={6} sm={4} xs={4}>
          <h1 className={styles.brand}>Welcome Talia,</h1>
        </Col>
        <Col md={3} sm={2} xs={2}>
          <div className={styles.search}>
            <form>
              <span>
                <input
                  type="text"
                  className={styles.rounded}
                  placeholder="Search..."
                />
              </span>
            </form>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6}>
          <div className={styles.ProfileItems}>
            <div className={styles.Notification}>
              <i className="fas fa-bell fa-3x" />
            </div>
            <div className={styles.Notification}>
              <i className="fas fa-envelope fa-3x" />
            </div>
            <div className={styles.ProfilePicture}>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className={styles.caret} />
                <DropdownMenu>
                  <DropdownItem header>My Profile</DropdownItem>
                  <DropdownItem disabled>Update Status</DropdownItem>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Log Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

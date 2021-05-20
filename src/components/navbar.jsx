import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <Nav
          activeKey="/"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link to="/" activeKey="/" href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              to="/favourites"
              activeKey="/favourites"
              href="/favourites"
            >
              <Link to="/favourites">Favourites</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="https://www.google.com">Google</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

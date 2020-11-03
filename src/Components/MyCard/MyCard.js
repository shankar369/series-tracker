import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyCard.css";

class MyCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    function netflixHandler() {
      return;
    }
  }

  render() {
    return (
      <div className="cardStyles">
        <Card
          style={{
            width: "15rem",
            margin: "25px",
            padding: "10px auto",
            backgroundColor: this.props.color,
            // position: "absolute",
            // position: "relative",
            // float: "left",
            // top: "250px",
            // left: "250px",
          }}
        >
          <Card.Body>
            <Card.Title>{this.props.ott}</Card.Title>
            <Card.Subtitle className="mb-3 small">
              Movies and Series
            </Card.Subtitle>
            <Card.Text>
              Maintain a list of movies and series from {this.props.ott}.
            </Card.Text>
            <Link to={`/${this.props.ott}`}>
              <Button style={{ backgroundColor: "" }} onClick={() => {}}>
                Click Me!
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;

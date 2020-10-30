import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyCard.css";

class MyCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card
          className="flip-card-front"
          style={{
            width: "15rem",
            backgroundColor: this.props.color,
            // position: "absolute",
            margin: "25px",
            padding: "10px auto",
            position: "relative",
            float: "left",
            top: "250px",
            left: "250px",
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
            <Button
              style={{ backgroundColor: "" }}
              onClick={this.NetflixHandler}
            >
              <Link to={`/${this.props.ott}`}>Click Me!</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;

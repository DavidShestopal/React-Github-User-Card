import React from 'react';
import { Card, CardImg, CardText } from 'reactstrap';

function UserCard(props) {
  return (
    <div className="userCards">
      <Card key={props.id}>
        <div>
          <CardImg src={props.avatar_url} alt={props.id}></CardImg>
          <CardText>{props.login}</CardText>
          <CardText>{props.location}</CardText>
          <CardText>{props.html_url}</CardText>
          {/* <CardImg src="https://ghchart.rshah.org/DavidShestopal" alt="2016rshah's Github chart" /> */}
        </div>
      </Card>
    </div>
  );
}

export default UserCard;

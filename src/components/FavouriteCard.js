import React, { Component } from 'react'
import { Card , Button  } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.deletefavs(this.props)} >Delete</Button>
    <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props)} >update</Button>
  </Card.Body>
</Card>  
            </div>
        )
    }
}

export default FavouriteCard

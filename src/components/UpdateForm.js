import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
               <Form onSubmit={this.props.updateData}>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Drink name</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.name}    />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="img">
    <Form.Label>Drink image</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.img} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
   update
  </Button>
</Form> 
            </div>
        )
    }
}

export default UpdateForm


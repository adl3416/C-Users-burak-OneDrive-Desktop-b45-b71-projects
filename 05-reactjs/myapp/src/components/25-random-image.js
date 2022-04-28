import React from 'react'
import {Card, Container,Button} from "react-bootstrap";

const RandomImage = () => {
    




  return (

    <Container>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
    <Card.Title>Random number:</Card.Title>
    
     <Button variant="primary">Change</Button>
    </Card.Body>
    </Card>

        
    </Container>
  )
}

export default RandomImage;
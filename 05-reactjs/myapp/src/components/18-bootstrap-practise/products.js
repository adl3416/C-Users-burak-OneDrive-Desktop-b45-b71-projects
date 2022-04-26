import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from './product'
import data from "../../assets/data/products.json"   /*  once json import edildi */

const Products = () => {
  return (
      <Container className="my-5">

     <Row className="g-3">

         {
             data.map((item)  => {  /* bu sayede 6 foto oldu.  dataya dizi geliyo */

                const {id, image,title,desc,price}=item;

                 return (
                   <Col md={3} key={item.id}>
                      <Product 
                      title={title}  
                      price={price} 
                      desc={desc}  
                      image={image} 
                      
                    />
                    </Col>
                 )
             })
         }
     
    

    </Row>

    </Container>
  )
}

export default Products
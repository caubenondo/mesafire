import React from 'react'
import {Button, Icon, Row, Col, Card,Input} from 'react-materialize'

const NewItemForm = (props) =>  {
  
    return (
      <Row>
        <Col m={6} s={12} offset={'3'}>
            <Card  title="Form control" > 
                <Row>
                    <Input s={6} label='name' value=''/>
                </Row>
            </Card>
        </Col>
      </Row>
    )
  
}

export default NewItemForm;
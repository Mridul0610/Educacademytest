import * as React from 'react';
import "./Main.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SignInSide from './SignIn';
import Footer from './Footer';
import image from "../../src/images/image1.jpg"


export default function Main() {
  return (
    <Container fixed>
      <div className='main'>
        <Row>
          <Col sm={4}>
            <center>
           <h1 style={{color:"#176B87"}}> Time To <span style={{color:"#0F2C59" , fontSize:60}}>Travel</span></h1>
           <h3 style={{color:"#176B87"}}>Around The World!!</h3></center>
          </Col>
          <Col sm={8} >
          <Box sx={{ color: 'action.active',display:'flex',justifyContent:"flex-end", paddingTop: 1.6}}>
          <Badge color="secondary" variant="dot" ><p><a href='https://www.hindustantimes.com/cities/chandigarh-news/visa-suspension-canadian-nris-in-limbo-as-travel-plans-to-punjab-go-for-a-toss-101695326042339.html'>Follow us!!</a> </p>
          <MailIcon />
          </Badge>
          </Box>
          </Col>
        </Row>
      </div>
      <div className='middle'>
       <SignInSide></SignInSide>
      </div>
      <div className='foot'>
        <Footer></Footer>
      </div>
    </Container>
  );
}

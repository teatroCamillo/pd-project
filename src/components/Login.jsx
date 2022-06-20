import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Header from './Header';

const Login = () => {
  return (
    <Container className='h-100'>
      <Header/>
      <Row className="justify-content-md-center">
        <Col className="bg-light text-dark rounded-4 p-4 shadow-lg" md="4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer/>
    </Container>
  )
}

export default Login
import React from "react";

import { Component } from "react";

import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export class SectionLogin extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    let handleChange = (e) => {
      try {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      } catch (error) {
        console.log(error);
      }
    }

    let recoveryPassword = (e) =>{
      e.preventDefault();
    }

    let sendLogin = (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      if (username != "" && password != "") {
        alert(`Username: ${username}\nSenha: ${password}`);
      }
    }
    return (
      <>
        <div
          className="section section-image section-login"
          style={{
            backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="mx-auto" lg="4" md="6">
                <Card className="card-register">
                  <h3 className="title mx-auto">Login</h3>
                  <h5 className="subtitle mx-auto">Você deve usar os mesmos dados usados in-game.</h5>
                  <Form className="register-form">
                    <label>Username</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Username" type="text" name="username" />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Password" type="password" name="password" />
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="button"
                      onClick={e => sendLogin(e)}
                    >
                      Login
                  </Button>
                  </Form>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#"
                      onClick={e => recoveryPassword(e)}
                    >
                      Esqueceu sua senha?
                  </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default SectionLogin;

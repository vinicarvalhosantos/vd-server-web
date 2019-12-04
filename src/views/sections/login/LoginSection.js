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
  Modal,
  Col
} from "reactstrap";

export class SectionLogin extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      modal: false,
      messageSuccess: ''
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
    
    const handleToggleModal = () => {
      this.setState({
        modal: !this.state.modal
      })
    };

    let handleRecoveryPassword = (e) => {
      e.preventDefault();
    }

    let handleSetMessageSuccess = (msg) => {
      this.setState({
        messageSuccess: msg
      })
    }
    let handleSendLogin = (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      if (username && password ) {
        if (username == "vinicius" && password == "123") {
          handleToggleModal();
          handleSetMessageSuccess(`Usuário e senha autenticados com sucesso!`);
        }else{
          handleToggleModal();
          handleSetMessageSuccess(`Usuário ou senha inválidos!`);
        }
      }else{
        handleToggleModal();
        handleSetMessageSuccess(`Preencha usuário e senha para prosseguir!`);
      }
    }
    return (
      <>
        <div
          className="section section-image section-login"
          style={{
            backgroundImage: `url(${require("assets/img/login-image.jpg")})`,
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}
        >
          <Container>
            <Row>
              <Col className="mx-auto" lg="4" md="6">
                <Modal isOpen={this.state.modal} toggle={handleToggleModal}>
                  <div style={{ alignSelf: 'center' }} className="modal-body">
                    {this.state.messageSuccess}
                </div>
                  <div className="modal-footer">
                    <Button className="btn-link" color="danger" type="button" onClick={handleToggleModal}>
                      OK
                    </Button>
                  </div>
                </Modal>
                <Card className="card-register" style={{ backgroundImage: `url(${require("assets/img/login-wallpaper.jpg")})` }}>
                  <h3 className="title mx-auto">Login</h3>
                  <h5 className="subtitle mx-auto">Você deve usar os mesmos dados usados in-game.</h5>
                  <Form className="register-form" onKeyPress={e =>{ if(e.key === "Enter") handleSendLogin(e) }}>
                    <label>Usuário</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Usuário" type="text" name="username" />
                    </InputGroup>
                    <label>Senha</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Senha" type="password" name="password" />
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="success"
                      type="button"
                      onClick={e => handleSendLogin(e)}
                    >
                      Login
                  </Button>
                  </Form>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="success"
                      href="#"
                      onClick={e => handleRecoveryPassword(e)}
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

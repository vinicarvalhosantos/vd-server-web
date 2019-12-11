import React from "react";

import { Component } from "react";

import Utils from "utils/Utils.js";

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
      email: '',
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

    let handleSetMessageSuccess = (msg) => {
      this.setState({
        messageSuccess: msg
      })
    }
    let handleSendRecovery = (e) => {
      e.preventDefault();
      const { username, email } = this.state;
      if (username && email) {
        if (Utils.validateEmail(email)) {
          if (username == "vinicius" && email == "vini.csantos@hotmail.com") {
            handleToggleModal();
            handleSetMessageSuccess(`Um pedido para alterar a sua senha foi enviado ao seu email! Por favor siga as instruções corretamente para que não haja problemas!`);
          } else {
            handleToggleModal();
            handleSetMessageSuccess(`Email ou usuário inválido!`);
          }
        } else {
          handleToggleModal();
          handleSetMessageSuccess(`Você precisa inserir um Email válido!`);
        }
      } else {
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
                  <h3 className="title mx-auto">Recuperar Senha</h3>
                  <h5 className="subtitle mx-auto">Você deve usar os mesmos dados utilizados in-game.</h5>
                  <Form className="register-form" onKeyPress={e => { if (e.key === "Enter") handleSendRecovery(e) }}>
                    <label>Email</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-envelope" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Email" type="email" name="email" />
                    </InputGroup>
                    <label>Usuário</label>
                    <InputGroup className="form-group-no-border">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-user-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={e => handleChange(e)} placeholder="Usuário" type="text" name="username" />
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="success"
                      type="button"
                      onClick={e => handleSendRecovery(e)}
                    >
                      Enviar
                  </Button>
                  </Form>
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

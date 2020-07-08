import React from "react";

import { Component } from "react";

import Utils from "utils/Utils.js";

import axios from "axios";

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
          axios.post(`${process.env.REACT_APP_BASE_URL}/v1/users/recoveryPassword`, { username: username, userEmail: email }).then(response => {
            handleToggleModal();
            handleSetMessageSuccess(`As informações para a alteração de senha foram enviadas ao seu email! Siga os passos para que não haja nenhum problema.`);
          }).catch(error => {
            handleToggleModal();
            if (error.response.status) {
              const data = JSON.parse(JSON.stringify(error.response.data));
              handleSetMessageSuccess(data.errors[0].userMessage);
            } else {
              handleSetMessageSuccess(`Houve um erro ao tentar realizar uma requisição na API. Por favor entre em contato com um administrador para que o problema seja resolvido!`);
            }
          })
        } else {
          handleToggleModal();
          handleSetMessageSuccess(`Você precisa inserir um email válido!`);
        }
      } else {
        handleToggleModal();
        handleSetMessageSuccess(`Preencha usuário e email para prosseguir!`);
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
                  {//<h5 className="subtitle mx-auto">Você deve usar os mesmos dados utilizados in-game.</h5>
                  }
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

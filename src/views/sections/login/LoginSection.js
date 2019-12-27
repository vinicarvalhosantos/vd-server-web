import React from "react";

import { Component } from "react";

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
      if (window.sessionStorage.getItem("username"))
        window.location.href = "/index"
    };

    let handleSetMessageSuccess = (msg) => {
      this.setState({
        messageSuccess: msg
      })
    }
    let handleSendLogin = async (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      if (username && password) {
        await axios.post("http://0.0.0.0:8000/userAuthenticate", { username: username, password: password }, { validateStatus: false })
          .then(response => {
            if (response.status == 200) {
              const { username, email, userId } = response.data.records[0];
              handleToggleModal();
              handleSetMessageSuccess(`Usuário e senha autenticados com sucesso.`);
              window.sessionStorage.setItem("userId", userId);
              window.sessionStorage.setItem("username", username);
              window.sessionStorage.setItem("email", email);
            } else {
              handleToggleModal();
              handleSetMessageSuccess(`Usuário ou senha inválido. Tente novamente`);
            }
          })
          .catch(error => {
            console.log(error);
            handleToggleModal();
            handleSetMessageSuccess(`Houve um erro ao tentar realizar uma requisição na API. Por favor entre em contato com um administrador para que o problema seja resolvido!`);
          })
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
                    <Button className="btn-link" color="success" type="button" onClick={handleToggleModal}>
                      OK
                    </Button>
                  </div>
                </Modal>
                <Card className="card-register" style={{ backgroundImage: `url(${require("assets/img/login-wallpaper.jpg")})` }}>
                  <h3 className="title mx-auto">Login</h3>
                  <h5 className="subtitle mx-auto">Você deve usar os mesmos dados utilizados in-game.</h5>
                  <Form className="register-form" onKeyPress={e => { if (e.key === "Enter") handleSendLogin(e) }}>
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
                      href="/recoverypassword"
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

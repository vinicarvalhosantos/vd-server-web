import React from "react";
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

function SectionLogin() {
  

  const [username = "", setUsername] = React.useState(false);//USUARIO
  const [password = "", setPassword] = React.useState(false);//SENHA

  let setPasswordValue = password =>{
    setPassword(password);
  }

  let setUsernameValue = username =>{
    setUsername(username);
  }

  const userLogin = (event) =>{
    try {
      event.preventDefault()
      if(username == "ViniiCarvalhoo" && password == "91625724"){
        alert("Funcionou!");
      }else{
        alert("Funcionou!");
      }
    } catch (error) {
      console.log(error)
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
                <h5 className="subtitle mx-auto">Obs: Seu login e senha são os mesmos que você usa in-game.</h5>
                <Form className="register-form">
                  <label>Username</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user-circle"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" onChange={value => {setUsernameValue(value)}} />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" onChange={value => {setPasswordValue(value)}} />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Logar
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => userLogin(e)}
                  >
                    Esqueceu sua senha?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;

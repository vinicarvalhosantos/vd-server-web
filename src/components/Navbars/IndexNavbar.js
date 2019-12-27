import React from "react";
import classnames from "classnames";
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const { username } = window.sessionStorage;

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const signOut = (e) => {
    sessionStorage.clear();
    e.preventDefault();
    window.location.reload();
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target=""
            title="VDServer WebSite"
          >
            VDServer
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="#"
                title="Entrar na loja do servidor"
              >
                <i className="fa fa-shopping-basket" /> Loja
              </NavLink>
            </NavItem>
            {
              !window.sessionStorage.getItem("username") ?
                <NavItem>
                  <NavLink
                    href="/login"
                    title="Logar no site"
                  >
                    <i className="fa fa-user-circle" /> Login
              </NavLink>
                </NavItem>
                :

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="success"
                    data-toggle="dropdown"
                    href=""
                    id="dropdownMenuButton"
                    nav
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <i className="fa fa-user-circle" /> {username}
                  </DropdownToggle>
                  <DropdownMenu
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-info"
                  >
                    <DropdownItem header tag="span">
                      <i className="fa fa-address-card" /> {`Bem-Vindo ${username}`}
                    </DropdownItem>
                    <DropdownItem
                      href=""
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user-circle" /> Perfil
                        </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href=""
                      onClick={e => signOut(e)}
                    >
                      <i className="fa fa-sign-out" /> Sair
                        </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

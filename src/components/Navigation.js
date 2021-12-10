import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function Navigation() {
	const { logout } = useAuth();

	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
			<Navbar.Brand as={NavLink} to={routes.home} className="mx-4">
				Gestor de tareas
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-4" />
			<Navbar.Collapse id="responsive-navbar-nav " >
				<Nav className="me-auto ">
					<Nav.Link as={NavLink} to={routes.projects} className="mx-4">
						Projects
					</Nav.Link>
					<NavDropdown title="Admin" className="mx-4">
						<NavDropdown.Item as={NavLink} to={routes.admin.users}>
							Usuarios
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav >
					{/* <Nav.Link as={NavLink} to={routes.login} className="mx-4">
						Iniciar Sesión
					</Nav.Link> */}
					{/* <Nav.Link as={NavLink} to={routes.register} className="mx-4">
						Registrarse
					</Nav.Link> */}
					<Nav.Link as={NavLink} to={routes.account} className="mx-4">
						Mi cuenta
					</Nav.Link>
					<Nav.Link to={routes.account} onClick={logout} className="mx-4">
						Cerrar Sesión
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

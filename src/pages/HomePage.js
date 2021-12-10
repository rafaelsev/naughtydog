import { Container, Row, Col, Button } from 'react-bootstrap';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom'
import "./Css/homepage.css"


export default function HomePage() {
	return (
		<Container className="mt-5 border border-3">
			
			<Row className="row align-items-center g-lg-5 py-5">
				<div className= "col-md-10 mx-auto col-lg-5 ">
				<Col className="p-4 p-md-5 border rounded-3 bg-light bg-light">
					<h2>Bienvenid@ a Gestor de tareas</h2>
					<p>¡Aquí podrás gestionar tus proyectos!</p>
					<p>Marca tus tareas como terminadas, Agrega, elimina, o actualiza.</p>
					<div>
						<Link to={routes.login}>Ingresa</Link> o 
						<Button as={Link} to={routes.register} className="ml-1">Crea una cuenta</Button>
					</div>
				</Col>
				</div>
                <Col>
                    <img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="gestor-de-tareas"
                    />
    				<p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
                </Col>
			</Row>
		</Container>
	);
}

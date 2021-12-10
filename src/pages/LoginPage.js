import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import "./Css/loginpage.css";


const userCredentials = {};

export default function LoginPage() {
	const location = useLocation();
	const { login } = useAuth();



	return (
		<>
			<Container className=" w-75 mt-5 rounded shadow-lg mb-5 bg-body rounded">
				<Row className="mt-4 border border-dark border-2 aling-items-stretch">
					<div className="col bg text-center img-fluid d-none d-lg-block" >
						
					</div>
					<Col  className="my-5 bg-white ">
							<div style={{ maxWidth: '500px', height: '500px' }} className="mx-auto py-5 text-center  mb-5">
							
							<h2 className="fw-bold" >Bienvenid@ </h2>
							<p className="fw-bold">¡Gestiona tu tiempo, mejora tu proactividad!</p>
							{/* LOGIN */}
							
							<form action ="#">
								<div className="mb-4">
									<label for="email" className="form-label">Usuario</label>
									<input type="email" className="form-control" name="Usuario"/>				

								</div>
								<div className="mb-4">
									<label for="password" className="form-label">Contraseña</label>
									<input type="password" className="form-control" name="password"/>
								</div>
								<div className="mb-4">									
									<input type="checkbox" className="form-check-input"  name="connected" />
									<label for="connected" className="form-check-label mx-2">Mantenerme conectado</label>
								</div>

							</form>
									
							<Button onClick={() => login(userCredentials, location.state?.from)} className="mt-2 m-4">Iniciar sesión</Button>
							{/* <Button as={Link} to={routes.register} className="mt-2 m-4 ">Crea una cuenta</Button> */}
						</div>									
					</Col>
				</Row>
			</Container>
		</>
			
	);
}

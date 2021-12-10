export default function RegisterPage() {
    return (
        <div className="container my-5" >
            <div className="card p-2 border-2">

                <div className="card-header border">
                    Registrar Usuario
                </div>

                <div className="card-body">
                <form class="row g-3 needs-validation" novalidate>

                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="validationCustom01" value="Mark" required />

                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>

                            <div className="col-md-3 position-relative my-3">
                                <label for="validationTooltip04" class="form-label">Rol</label>
                                <select className="form-select" id="validationTooltip04" required>
                                <option selected disabled value="">Admin</option>
                                <option>Regular</option>
                                <option>Lider</option>
                                </select>
                                <div class="invalid-tooltip">
                                Please select a valid state.
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                </form>    
                </div>               
            </div>
        </div>  
    )
}

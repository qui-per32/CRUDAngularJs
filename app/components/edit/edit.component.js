export const EditComponent = {
    template: ` 
    <div class="container-fluid">
    <form action="" method="post" class="needsValidation" novalidate>
    <div class="card card-default newUser header">
        <div class="card-header">
            <h4 class="card-title">
                <b>Datos Personales</b>
            </h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-3 col-lg-3">
                    <div class="form-group">
                        <label class="control-label">Nombre *</label>
                        <input type="text" class="form-control" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu Nombre
                            </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Primer Apellido *</label>
                        <input type="text" class="form-control" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu Primer Apellido
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Segundo Apellido</label>
                        <input class="form-control" type="text">
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Fecha de Nacimiento</label>
                        <div class="input-group date" data-provide="datepicker">
                            <input class="form-control" type="text">
                            <span class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">
                                    <i class="fa fa-calendar"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">NHC(número de historia clínica) *</label>
                        <input type="text" class="form-control" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu NHC
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">NIF o Pasaporte</label>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">Genero</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card card-default newUser">
        <div class="card-header">
            <h4 class="card-title">
                <b>Dirección</b>
            </h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Calle</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Numero</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Puerta</label>
                        <input class="form-control" type="text">
                    </div>
                </div>

                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Código Postal</label>
                        <input class="form-control" type="text">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Ciudad</label>
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card card-default newUser">
        <div class="card-header">
            <h4 class="card-title">
                <b>Listado aseguradoras</b>
            </h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">Nombre aseguradora</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">Tipo de seguro(salud,familiar,dental...)</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label class="control-label">Numero de la tarjeta</label>
                        <input class="form-control" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center">
        <input type="submit" value="Enviar" class="btn btn-info btn-block rounded-2">
    </div>
    </form>
</div>
    `
}
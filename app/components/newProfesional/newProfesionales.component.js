import controller from './newProfesional.controller';

export const newProfesionalescomponent = {
    bindings: {
            dataResult: '<'
        },
        controller,
    template: ` 
<div class="container-fluid">
    <div class="row header">
        <div class="col-5">
            <div class="card card-default newUser">
                <div class="card-header">
                    <h4 class="card-title">
                    <b>Profesionales</b>
                    </h4>
                    <button type="button" class="btn btn-sm btn-primary">
                        <a ui-sref="create" class="nav-link text-white">Pacientes</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="needsValidation" novalidate>
    <div class="card card-default newUser">
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
                            <input type="text" class="form-control" name="nombre" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Nombre
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Primer Apellido *</label>
                            <input type="text" class="form-control" name="primerApellido" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Primer Apellido
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Segundo Apellido</label>
                            <input class="form-control" type="text" name="segundoApellido">
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Fecha de Nacimiento</label>
                            <div class="input-group date" data-provide="datepicker">
                                <input class="form-control" type="text" name="fechaNacimiento">
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
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Género</label>
                            <input type="text" class="form-control" name="genero">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Numero colegiado *</label>
                            <input type="text" class="form-control" name="numeroColegiado" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Numero de colegiado
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">NIF o Pasaporte</label>
                            <input type="text" class="form-control" name="nifoPasaporte">
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="form-group">
                            <label for="inputState">
                                Tipo de Profesional
                            </label>
                            <select id="tipoProfesional" class="form-control" name="tipoProfesionnal">
                                <option value="medico">Medico</option>
                                <option value="enfermero">Enfermero</option>
                                <option value="administrativo">Administrativo</option>
                            </select>
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
                            <input type="text" class="form-control" name="calle">
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="form-group">
                            <label class="control-label">Numero</label>
                            <input type="text" class="form-control" name="numero">
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="form-group">
                            <label class="control-label">Puerta</label>
                            <input class="form-control" type="text" name="puerta">
                        </div>
                    </div>

                    <div class="col-2">
                        <div class="form-group">
                            <label class="control-label">Código Postal</label>
                                <input class="form-control" type="text" name="codigoPostal">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label class="control-label">Ciudad</label>
                                <input class="form-control" type="text" name="ciudad">
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="text-center">
        <button ng-click="$ctrl.newUser()" class="btn btn-info btn-block rounded-2">Enviar</button>
    </div>
    </div>
</div>
    `
}
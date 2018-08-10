import controller from './newProfesional.controller';

export const newProfesionalescomponent = {
    bindings: {
            newUser: '<'
        },
        controller,
    template: ` 
<div class="container-fluid">
    <div class="row header">
        <div class="col-sm-5 col-md-3">
            <div class="card card-default cardHeader newUser">
                <div class="card-header">
                    <h4 class="card-title">
                    <b>Profesionales</b>
                    </h4>
                    <button type="button" class="btn btn-sm btn-primary btn-block">
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
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Nombre *</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.nombre" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Nombre
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Primer Apellido *</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.primerApellido" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Primer Apellido
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Segundo Apellido</label>
                            <input class="form-control" type="text" ng-model="$ctrl.newUser.segundoApellido">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Fecha de Nacimiento</label>
                            <div class="input-group date" data-provide="datepicker">
                                <input class="form-control" type="text" ng-model="$ctrl.newUser.fechaNacimiento">
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
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Género</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.genero">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Numero colegiado *</label>
                            <input type="text" class="form-control"ng-model="$ctrl.newUser.numeroColegiado" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Numero de colegiado
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">NIF o Pasaporte</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.nifoPasaporte">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label for="inputState">
                                Tipo de Profesional
                            </label>
                            <select id="tipoProfesional" class="form-control" ng-model="$ctrl.newUser.tipoProfesional">
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
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Calle</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.calle">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-1">
                        <div class="form-group">
                            <label class="control-label">Numero</label>
                            <input type="text" class="form-control" ng-model="$ctrl.newUser.numero">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-1">
                        <div class="form-group">
                            <label class="control-label">Puerta</label>
                            <input class="form-control" type="text" ng-model="$ctrl.newUser.puerta">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2">
                        <div class="form-group">
                            <label class="control-label">Código Postal</label>
                                <input class="form-control" type="text" ng-model="$ctrl.newUser.codigoPostal">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Ciudad</label>
                                <input class="form-control" type="text" ng-model="$ctrl.newUser.ciudad">
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="text-center newUser">
        <button ui-sref="home" ng-click="$ctrl.createNewUser()" class="btn btn-info btn-block rounded-2">Enviar</button>
    </div>
    </div>
</div>
    `
}
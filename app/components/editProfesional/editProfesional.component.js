import controller from '../editProfesional/editProfesional.controller';

export const EditProfesionalComponent = {
    bindings: {
        editDataProfesional: '<'
    },
    controller,
    template: ` 
    <div class="container-fluid">
    <form class="needsValidation" ng-submit="$ctrl.edit(form)" novalidate>
    <div class="card card-default newUser editHeader">
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
                        <input type="text" class="form-control" name="nombre" ng-model="$ctrl.editDataProfesional.nombre" required>
                        <div ng-show="form.$submitted">
                                <div ng-show="form.nombre.$error.required">Por favor rellene el campo con tu Nombre</div>
                            </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3">
                    <div class="form-group">
                        <label class="control-label">Primer Apellido *</label>
                        <input type="text" class="form-control" name="primerApellido" ng-model="$ctrl.editDataProfesional.primerApellido" required>
                        <div ng-show="form.$submitted">
                                <div ng-show="form.primerApellido.$error.required">Por favor rellene el campo con tu Primer Apellido</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3">
                    <div class="form-group">
                        <label class="control-label">Segundo Apellido</label>
                        <input class="form-control" type="text" ng-model="$ctrl.editDataProfesional.segundoApellido">
                    </div>
                </div>

                <div class="col-sm-4 col-md-3">
                    <div class="form-group">
                        <label class="control-label">Fecha de Nacimiento</label>
                        <div class="input-group date" editDataProfesional-provide="datepicker">
                            <input class="form-control" type="text" ng-model="$ctrl.editDataProfesional.fechaNacimiento">
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
                        <label class="control-label">Numero de Colegiado *</label>
                        <input type="text" class="form-control" name="numeroColegiado" ng-model="$ctrl.editDataProfesional.numeroColegiado" required>
                        <div ng-show="form.$submitted">
                                <div ng-show="form.numeroColegiado.$error.required">Por favor rellene el campo con tu numero de colegiado</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3">
                    <div class="form-group">
                        <label class="control-label">NIF o Pasaporte</label>
                        <input type="text" class="form-control" ng-model="$ctrl.editDataProfesional.nifoPasaporte">
                    </div>
                </div>

                <div class="col-sm-4 col-md-3">
                    <div class="form-group">
                        <label class="control-label">Genero</label>
                        <input type="text" class="form-control" ng-model="$ctrl.editDataProfesional.genero">
                    </div>
                </div>
                <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label for="inputState">
                                Tipo de Profesional
                            </label>
                            <select id="tipoProfesional" class="form-control" ng-model="$ctrl.editDataProfesional.tipoProfesional">
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
                        <input type="text" class="form-control" ng-model="$ctrl.editDataProfesional.calle">
                    </div>
                </div>
                <div class="col-sm-4 col-md-1">
                    <div class="form-group">
                        <label class="control-label">Numero</label>
                        <input type="text" class="form-control" ng-model="$ctrl.editDataProfesional.numero">
                    </div>
                </div>
                <div class="col-sm-4 col-md-1">
                    <div class="form-group">
                        <label class="control-label">Puerta</label>
                        <input class="form-control" type="text" ng-model="$ctrl.editDataProfesional.puerta">
                    </div>
                </div>

                <div class="col-sm-4 col-md-2">
                    <div class="form-group">
                        <label class="control-label">Código Postal</label>
                        <input class="form-control" type="text" ng-model="$ctrl.editDataProfesional.codigoPostal">
                    </div>
                </div>
                <div class="col-sm-4 col-md-4">
                    <div class="form-group">
                        <label class="control-label">Ciudad</label>
                        <input class="form-control" type="text" ng-model="$ctrl.editDataProfesional.ciudad">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center newUser">
        <button type="submit" ui-sref="home"  class="btn btn-info btn-block rounded-2">Enviar</button>
    </div>
    </div>
</div>
    `
}
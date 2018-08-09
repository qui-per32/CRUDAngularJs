import controller from '../editProfesional/editProfesional.controller';

export const EditProfesionalComponent = {
    bindings: {
        dataResult: '<'
    },
    controller,
    template: ` 
    <div class="container-fluid">
    <div  class="needsValidation" novalidate>
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
                        <input type="text" class="form-control" ng-model="$ctrl.dataResult.nombre" name="nombre" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu Nombre
                            </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Primer Apellido *</label>
                        <input type="text" class="form-control" name="primerApellido" ng-model="$ctrl.dataResult.primerApellido" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu Primer Apellido
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Segundo Apellido</label>
                        <input class="form-control" type="text" name="segundoApellido" ng-model="$ctrl.dataResult.segundoApellido">
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Fecha de Nacimiento</label>
                        <div class="input-group date" data-provide="datepicker">
                            <input class="form-control" type="text" name="fechaNacimiento" ng-model="$ctrl.dataResult.fechaNacimiento">
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
                        <label class="control-label">Numero de Colegiado *</label>
                        <input type="text" class="form-control" name="numeroColegiado" ng-model="$ctrl.dataResult.numeroColegiado" required>
                        <div class="invalid-feedback">
                                Por favor rellene el campo con tu numero de colegiado
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">NIF o Pasaporte</label>
                        <input type="text" class="form-control" name="nifoPasaporte" ng-model="$ctrl.dataResult.nifoPasaporte">
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Genero</label>
                        <input type="text" class="form-control" name="genero" ng-model="$ctrl.dataResult.genero">
                    </div>
                </div>
                <div class="col-3">
                        <div class="form-group">
                            <label for="inputState">
                                Tipo de Profesional
                            </label>
                            <select id="tipoProfesional" class="form-control" name="tipoProfesionnal" ng-model="$ctrl.dataResult.tipoProfesional">
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
                        <input type="text" class="form-control" name="calle" ng-model="$ctrl.dataResult.calle">
                    </div>
                </div>
                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Numero</label>
                        <input type="text" class="form-control" name="numero" ng-model="$ctrl.dataResult.numero">
                    </div>
                </div>
                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Puerta</label>
                        <input class="form-control" type="text" name="puerta" ng-model="$ctrl.dataResult.puerta">
                    </div>
                </div>

                <div class="col-2">
                    <div class="form-group">
                        <label class="control-label">Código Postal</label>
                        <input class="form-control" type="text" name="codigoPostal" ng-model="$ctrl.dataResult.codigoPostal">
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label class="control-label">Ciudad</label>
                        <input class="form-control" type="text" name="ciudad" ng-model="$ctrl.dataResult.ciudad">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center">
        <button ng-click="$ctrl.save()"  class="btn btn-info btn-block rounded-2">Enviar</button>
    </div>
    </div>
</div>
    `
}
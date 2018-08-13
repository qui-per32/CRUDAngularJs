import controller from '../editPaciente/editPaciente.controller'

export const EditPacienteComponent = {
    bindings: {
        editDataPacientess: '<'
    },
    controller,
    template: ` 
    <div class="container-fluid">
    <form name="form" class="needsValidation" ng-submit="$ctrl.edit(form)" novalidate>
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
                            <input type="text" class="form-control" name="nombre" ng-model="$ctrl.editDataPacientes.nombre" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Nombre
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Primer Apellido *</label>
                            <input type="text" class="form-control" name="primerApellido" ng-model="$ctrl.editDataPacientes.primerApellido" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu Primer Apellido
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Segundo Apellido</label>
                            <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.segundoApellido">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Fecha de Nacimiento</label>
                            <div class="input-group date" data-provide="datepicker">
                                <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.fechaNacimiento">
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
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">NHC(número de historia clínica) *</label>
                            <input type="text" class="form-control" name="nhc" ng-model="$ctrl.editDataPacientes.nhc" required>
                            <div class="invalid-feedback">
                                Por favor rellene el campo con tu NHC
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">NIF o Pasaporte</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.nifoPasaporte">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Genero</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.genero">
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
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Calle</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.calle">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-2">
                        <div class="form-group">
                            <label class="control-label">Numero</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.numero">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-2">
                        <div class="form-group">
                            <label class="control-label">Puerta</label>
                            <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.puerta">
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2">
                        <div class="form-group">
                            <label class="control-label">Código Postal</label>
                            <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.codigoPostal">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3">
                        <div class="form-group">
                            <label class="control-label">Ciudad</label>
                            <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.ciudad">
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
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Nombre aseguradora</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.nombreAseguradora">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Tipo de seguro(salud,familiar,dental...)</label>
                            <input type="text" class="form-control" ng-model="$ctrl.editDataPacientes.tipoSeguro">
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="form-group">
                            <label class="control-label">Numero de la tarjeta</label>
                            <input class="form-control" type="text" ng-model="$ctrl.editDataPacientes.numeroTarjeta">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center newUser">
            <button type="submit" class="btn btn-info btn-block rounded-2">Enviar</button>
        </div>
    </form>
</div>
    `
}
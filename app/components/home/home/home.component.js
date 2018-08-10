import controller from './home.controller'

export const HomeComponent = {
   bindings: {
           data: '<'
       },
       controller,
    template: ` 
<div class="container-fluid bodyApp">
    <div class="row">
        <div class="col-sm-12 col-md-12 col-xl-12">
            <div class="row titleCard listCard d-flex justify-content-center">
                <div class="col-sm-8 col-md-8 col-xl-8">
                    <div class="col-md-6 col-xl-6">
                        <h4>Usuarios</h4>

                    </div>
                    <div class="col-md-6 col-xl-6">
                        <div class="btn-group-vertical" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-sm btn-primary" ui-sref="create">Nuevo Usuario</button>
                            <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#borrarMedico">Borrar Medicos</button>
                            <div class="modal" id="borrarMedico" tabindex="-1" role="dialog" aria-labelledby="borrarMedicosTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">
                                                Borrar Medicos
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ¿Esta seguro de que desea borrar Todos los Medicos?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="sumbit" class="btn btn-secondary" ng-click="$ctrl.deleteMedic()" data-dismiss="modal">
                                                Si
                                            </button>
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class="table table-hover border titleCard">
                        <thead class="bg-light">
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>Nombre</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="user in $ctrl.data">
                                <td>
                                    <p>{{user.id}}</p>
                                </td>
                                <td>
                                    <p>{{user.nombre + ','+ user.primerApellido }}</p>
                                </td>
                                <td>
                                    <a ng-if="user.tipo == 'profesional'" ui-sref="editProfesional({userID: user.id})">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a ng-if="user.tipo == 'paciente'" ui-sref="editPaciente({userID: user.id})">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a ng-if="user.tipo == 'paciente'" ui-sref="pacientes({userID: user.id})">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a ng-if="user.tipo == 'profesional'" ui-sref="profesional({userID: user.id})">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a href="#" data-toggle="modal" data-target="#borrarUsuario{{user.id}}">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                    <div class="modal " id="borrarUsuario{{user.id}}" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">
                                                        Borrar Usuario
                                                    </h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ¿Esta seguro de que desea borrar el usuario?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="sumbit" class="btn btn-secondary" ng-click="$ctrl.deleteUser(user.id)" data-dismiss="modal">
                                                        Si
                                                    </button>
                                                    <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}






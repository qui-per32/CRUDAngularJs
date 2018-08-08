import controller from './home.controller'

export const HomeComponent = {
   bindings: {
           dataResult: '<'
       },
       controller,
    template: ` 
    <div class="container-fluid bodyApp">
   
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class=" offset-2 col-2 border-right">
                                <h4>Usuarios</h4>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-sm btn-primary"><a ui-sref="create" class="nav-link text-white">Nuevo usuario</a></button>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#borrarMedicos"><a  class="nav-link text-white">Borrar médicos</a></button>
                            </div>
                            <div class="modal fade" id="borrarMedicos" tabindex="-1" role="dialog" aria-labelledby="borrarMedicosTitle" aria-hidden="true">
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
                                                                <button type="sumbit" class="btn btn-secondary">
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
                        <div class="row justify-content-center titleCard">
                            <div class="col-8">
                                <table class="table table-hover">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>
                                            
                                            </th>
                                            <th>Nombre</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="user in $ctrl.dataResult">
                                            <td>
                                                <div class="form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="">
                                                    </label>
                                                </div>
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
                                                <div class="modal fade" id="borrarUsuario{{user.id}}" tabindex="-1" role="dialog" aria-labelledby="borrarUsuarioTitle" aria-hidden="true">
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
        </div>
    </div>
    `
}






import controller from './profesional.controller'

export const ProfesionalComponent = {
    bindings: {
        dataProfesional: '<'
    },
    controller,
    template: ` 
    <div class="container-fluid header">
    <div class="row justify-content-center">
    <div class="col-7">
      <div class="card mt-3 tab-card">
        <div class="card-header tab-card-header border">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Datos Personales</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Dirección</a>
            </li>
          </ul>
        </div>

        <div class="tab-content border" id="myTabContent">
          <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
            <h5 class="card-title"><u>Numero Colegiado</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.numeroColegiado}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Nombre</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.nombre}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Primer Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.primerApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Segundo Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.segundoApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Genero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.genero}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>Fecha de Nacimiento</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.fechaNacimiento}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>NIF o Pasaporte</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.nifoPasaporte}}</li>
            </ul>
          </div>
          <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
            <h5 class="card-title"><u>Calle</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.calle}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Numero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.numero}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Puerta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.puerta}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Código postal</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.codigoPostal}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Ciudad</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataProfesional.ciudad}}</li>
            </ul>              
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>  
    `
}
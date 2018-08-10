import controller from './pacientes.controller'

export const PacientesComponent = {
     bindings: {
         dataPacientes: '<'
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
                <a class="nav-link" id="uno-tab" data-toggle="tab" href="#uno" role="tab" aria-controls="One" aria-selected="true">Datos Personales</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="dos-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Dirección</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tres-tab" data-toggle="tab" href="#tres" role="tab" aria-controls="tres" aria-selected="false">Listado aseguradora</a>
            </li>
          </ul>
        </div>

        <div class="tab-content border" id="myTabContent">
          <div class="tab-pane fade show active p-3" id="uno" role="tabpanel" aria-labelledby="uno-tab">
            <h5 class="card-title"><u>NHC ( número de historia clínica)</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.nhc}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Nombre</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.nombre}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Primer Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.primerApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Segundo Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.segundoApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Genero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.genero}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>Fecha de Nacimiento</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.fechaNacimiento}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>NIF o Pasaporte</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.nifoPasaporte}}</li>
            </ul>
          </div>
          <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
            <h5 class="card-title"><u>Calle</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.calle}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Numero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.numero}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Puerta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.puerta}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Código postal</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.codigoPostal}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Ciudad</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.ciudad}}</li>
            </ul>              
          </div>
          <div class="tab-pane fade p-3" id="tres" role="tabpanel" aria-labelledby="tres-tab">
            <h5 class="card-title"><u>Nombre Aseguradora</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.nombreAseguradora}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Tipo seguro(salud, famliar, dental...)</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.tipoSeguro}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Número de la tarjeta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataPacientes.numeroTarjeta}}</li>
            </ul>            
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>  
    `
}
import controller from './pacientes.controller'

export const PacientesComponent = {
     bindings: {
         dataResult: '<'
       },
    controller,
    template: ` 
    <div class="container-fluid">
    <div class="row justify-content-center">
    <div class="col-6>
      <div class="card mt-3 tab-card">
        <div class="card-header tab-card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Datos Personales</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Dirección</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Listado Aseguradoras</a>
            </li>
          </ul>
        </div>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
            <h5 class="card-title"><u>NHC</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.NHC}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Nombre</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.nombre}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Primer Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.primerApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Segundo Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.segundoApellido}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Genero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.genero}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>Fecha de Nacimiento</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.fechaNacimiento}}</li>
            </ul>
            <h5 class="card-title titleCard"><u>NIF o Pasaporte</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.nifoPasaporte}}</li>
            </ul>
          </div>
          <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
            <h5 class="card-title"><u>Calle</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.calle}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Numero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.numero}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Puerta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.puerta}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Código postal</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.codigoPostal}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Ciudad</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.ciudad}}</li>
            </ul>              
          </div>
          <div class="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
            <h5 class="card-title"><u>Nombre aseguradora</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.nombreAseguradora}}</li>
            </ul>
             <h5 class="card-title titleCard"><u>Tipo de seguro(salud,familiar,dental...)</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.tipoSeguro}}</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Número de la tarjeta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">{{$ctrl.dataResult.NumeroTarjeta}}</li>
            </ul>              
          </div>

        </div>
      </div>
    </div>
  </div>
    </div>  
    `
}
export const ViewComponent = {
    template: ` 
    <div class="container-fluid">
    <div class="row justify-content-center">
    <div class="col-6">
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
              <li class="list-group-item">123123132</li>
            </ul>
             <h5 class="card-title titleCard"><u>Nombre</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Maria</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Primer Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Perez</li>
            </ul>
             <h5 class="card-title titleCard"><u>Segundo Apellido</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Gonzalez</li>
            </ul>
             <h5 class="card-title titleCard"><u>Genero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Mujer</li>
            </ul>
            <h5 class="card-title titleCard"><u>Fecha de Nacimiento</u></h5>
            <ul class="list-group">
              <li class="list-group-item">11/10/1992</li>
            </ul>
            <h5 class="card-title titleCard"><u>NIF o Pasaporte</u></h5>
            <ul class="list-group">
              <li class="list-group-item">44892390R</li>
            </ul>
          </div>
          <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
            <h5 class="card-title"><u>Calle</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Avenida del Cid</li>
            </ul>
             <h5 class="card-title titleCard"><u>Numero</u></h5>
            <ul class="list-group">
              <li class="list-group-item">32</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Puerta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">7</li>
            </ul>
             <h5 class="card-title titleCard"><u>Código postal</u></h5>
            <ul class="list-group">
              <li class="list-group-item">46018</li>
            </ul>
             <h5 class="card-title titleCard"><u>Ciudad</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Valencia</li>
            </ul>              
          </div>
          <div class="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
            <h5 class="card-title"><u>Nombre aseguradora</u></h5>
            <ul class="list-group">
              <li class="list-group-item">sanitas</li>
            </ul>
             <h5 class="card-title titleCard"><u>Tipo de seguro(salud,familiar,dental...)</u></h5>
            <ul class="list-group">
              <li class="list-group-item">Familiar</li>
            </ul>              
             <h5 class="card-title titleCard"><u>Número de la tarjeta</u></h5>
            <ul class="list-group">
              <li class="list-group-item">555552342342</li>
            </ul>              
          </div>

        </div>
      </div>
    </div>
  </div>
    </div>  
    `
}
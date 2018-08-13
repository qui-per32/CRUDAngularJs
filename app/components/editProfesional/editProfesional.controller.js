class EditProfesionalController {
    constructor(dataService, $location) {
        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
    }

    getId(id) {
      this.dataService.getData()
            .then(resultado => {
                this.editDataProfesional = resultado.filter(item => item.id == id)[0];
            });
    }

     edit(form) {
     if (form.nombre.$invalid === true || form.primerApellido.$invalid === true || form.numeroColegiado.$invalid == true) {
         console.log(form.nombre.$invalid);
         console.log(form.primerApellido.$invalid);
         console.log(form.numerocolegiado.$invalid);
         return;
     }
        this.dataService.edit(this.editDataProfesional)
    }
}

export default EditProfesionalController;
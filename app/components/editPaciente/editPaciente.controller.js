class EditPacienteController {
    constructor(dataService, $location) {


        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
        this.editDataPacientes = [];
    }

    getId(id) {

        this.dataService.getData()
            .then(resultado => {
                this.editDataPacientes = resultado.filter(item => item.id == id)[0];
            });
    }

    edit(form) {
        console.log("hola");

        console.log(form);

        if (form.nombre.$invalid === true || form.primerApellido.$invalid === true || form.nhc.$invalid == true) {
            console.log(form.nombre.$invalid);
            console.log(form.primerApellido.$invalid);
            console.log(form.nhc.$invalid);
            return;

        }
        this.dataService.edit(this.editDataPacientes);
    }
}

export default EditPacienteController;
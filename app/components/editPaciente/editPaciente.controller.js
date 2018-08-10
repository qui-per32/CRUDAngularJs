class EditPacienteController {
    constructor(dataService, $location) {
        
        
        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
    }

    getId(id) {
        console.log(id);

        this.dataService.getData()
            .then(resultado => {

                this.editDataPacientes = resultado.filter(item => item.id == id)[0];
                console.log(this.editDataPacientes);

            });
    }

    edit() {


        this.dataService.edit(this.editDataPacientes);
    }
}

export default EditPacienteController;
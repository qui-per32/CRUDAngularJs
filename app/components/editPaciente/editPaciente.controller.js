class EditPacienteController {
    constructor(dataService, $location,$state) {
        this.state = $state
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
        if(form.$invalid === true) {
                return
            } else {
                this.dataService.edit(this.editDataPacientes);
                this.state.go('home');
            }
    }
}

export default EditPacienteController;
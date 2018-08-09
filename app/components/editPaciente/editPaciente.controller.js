class EditPacienteController {
    constructor(dataService, $location) {
        
        
        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.users = dataService.getData();        
        this.getId(path[path.length - 1]);
    }

    getId(id) {
        console.log(id);

        this.dataService.getData()
            .then(resultado => {

                this.dataResult = resultado.filter(item => item.id == +id)[0];
                console.log(this.dataResult);

            });
    }

    edit() {


        this.dataService.edit(this.dataResult)
    }
}

export default EditPacienteController;
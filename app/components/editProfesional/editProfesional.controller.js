class EditProfesionalController {
    constructor(dataService, $location) {
        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
    }

    getId(id) {
        console.log(id);

        this.dataService.getData()
            .then(resultado => {

                this.editDataProfesional = resultado.filter(item => item.id == id)[0];
                

            });
    }

    edit(){
        
        
        this.dataService.edit(this.editDataProfesional)
    }
}

export default EditProfesionalController;
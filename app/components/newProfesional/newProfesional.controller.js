class NewProfesionalController {
    constructor(dataService) {

        this.dataService = dataService;
        this.getData();
    }

    getData() {
        this.dataService.getData()
            .then(resultado => {
                this.dataResult = resultado;
            });
    }

    deleteUser(id) {
        console.log(id);

        this.dataService.deleteUser(id);

        let modal = $('#borrarUsuario' + id);
        modal.modal('hide')
    }

    deleteMedic() {
        this.dataService.deleteMedic();
    }
}

export default NewProfesionalController;
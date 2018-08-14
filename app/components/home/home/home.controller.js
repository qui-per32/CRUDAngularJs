class HomeController {
    constructor(dataService) {
        
        
        this.dataService = dataService;
        this.getData();
    }

    getData() {
        this.dataService.getData()
            .then(resultado => {
                this.data = resultado;
            });
    }

    deleteUser(id) {
        this.dataService.deleteUser(id);
        let modal = $('#borrarUsuario' + id);
        modal.modal('hide')
    }

    deleteMedic() {
        this.dataService.deleteMedic();
    }
}

export default HomeController;
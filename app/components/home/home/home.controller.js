class HomeController {
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
       if (confirm('desea borar el usuario '+ id)) {
            this.dataService.deleteUser(id);
       }
        
    }
}

export default HomeController;
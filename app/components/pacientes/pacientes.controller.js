class PacientesController {
    constructor(dataService, $location) {
        let path = $location.$$path.split('/')
        
        this.dataService = dataService;
        this.getId(path[path.length -1]);
    }

    getId(id) {
        console.log(id);
        
        this.dataService.getData()
            .then(resultado => {
               
                this.dataPacientes = resultado.filter(item => item.id == id)[0];
                console.log(this.dataPacientes);
                
            });
    }
}

export default PacientesController;
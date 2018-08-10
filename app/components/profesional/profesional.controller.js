class ProfesionalController {
    constructor(dataService, $location) {
        let path = $location.$$path.split('/')

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
    }

    getId(id) {
        this.dataService.getData()
            .then(resultado => {
                this.dataProfesional = resultado.filter(item => item.id == +id)[0];
            });
    }
}

export default ProfesionalController;
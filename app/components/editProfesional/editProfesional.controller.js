class EditProfesionalController {
    constructor(dataService, $location,$state) {

        this.state = $state;        
        let path = $location.$$path.split('/');

        this.dataService = dataService;
        this.getId(path[path.length - 1]);
    }

    getId(id) {
      this.dataService.getData()
            .then(resultado => {
                this.editDataProfesional = resultado.filter(item => item.id == id)[0];
            });
    }

     edit(form) {
         if(form.$invalid === true) {
             return
         } else {
            this.dataService.edit(this.editDataProfesional);
            this.state.go('home');
         }

    }
}

export default EditProfesionalController;